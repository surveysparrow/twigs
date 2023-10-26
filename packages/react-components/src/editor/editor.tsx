import { AutoLinkNode, LinkNode } from '@lexical/link';
import { ListItemNode, ListNode } from '@lexical/list';
import {
  InitialConfigType,
  LexicalComposer
} from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { HeadingNode } from '@lexical/rich-text';

import {
  EditorState, Klass, LexicalEditor, LexicalNode
} from 'lexical';
import {
  Children,
  Fragment,
  ReactElement,
  ReactNode,
  RefObject,
  isValidElement,
  useMemo,
  useState
} from 'react';
import { EditorFeatureProps, EditorFeatures } from './features';
import {
  HashTagNode,
  ImageNode,
  KudosNode,
  MentionNode,
  VariableNode
} from './nodes';
import {
  AutoLinkPlugin,
  FloatingToolbar,
  FloatingToolbarTools,
  HashTagPlugin,
  ImagesPlugin,
  KudosPlugin,
  LinkPlugin,
  MentionsPlugin,
  ToolbarPlugin,
  VariablesPlugin
} from './plugins';

import { ExportPlugin, ExportPluginHandle } from './plugins/export-plugin';
import FloatingLinkEditorPlugin from './plugins/floating-link-editor';
import { ToolbarTools } from './plugins/toolbar/toolbar';

const initialConfig: InitialConfigType = {
  namespace: 'MyEditor',
  theme: {
    text: {
      bold: 'text-bold',
      italic: 'text-italic',
      underline: 'text-underline'
    }
  },
  onError: (err) => {
    console.error(err);
  }
};

const featuresToNodeMapping = {
  headings: {
    node: HeadingNode,
    component: null
  },
  images: {
    node: ImageNode,
    component: ImagesPlugin
  },
  lists: {
    node: [ListNode, ListItemNode],
    component: ListPlugin
  },
  links: {
    node: [LinkNode, AutoLinkNode],
    component: [AutoLinkPlugin, LinkPlugin]
  },
  kudos: {
    node: KudosNode,
    component: KudosPlugin
  },
  hashtags: {
    node: HashTagNode,
    component: HashTagPlugin
  },
  mentions: {
    node: MentionNode,
    component: MentionsPlugin
  },
  variables: {
    node: VariableNode,
    component: VariablesPlugin
  }
} as const;

export const Editor = ({
  nodes,
  onChange,
  editable,
  features,
  children,
  editorState,
  showToolbar = true,
  toolbarTools,
  showFloatingToolbar = true,
  floatingToolbarTools,
  exportRef
}: {
  editorState?: EditorState;
  onChange: (
    newEditorState: EditorState,
    editor: LexicalEditor,
    tags: Set<string>
  ) => void;
  editable?: boolean;
  children?: ReactNode;
  showToolbar?: boolean;
  toolbarTools?: ToolbarTools;
  showFloatingToolbar?: boolean;
  nodes?: InitialConfigType['nodes'];
  floatingToolbarTools?: FloatingToolbarTools;
  features?: (keyof typeof featuresToNodeMapping)[];
  exportRef?: RefObject<ExportPluginHandle>
}) => {
  const [floatingAnchorElem, setFloatingAnchorElem] = useState<HTMLDivElement | null>(null);
  // const [isLinkEditMode, setIsLinkEditMode] = useState<boolean>(false);

  const supportedFeatures = useMemo(() => {
    if (features) {
      const selectedNodes = features
        .map((item) => featuresToNodeMapping[item].node)
        .flat();

      const selectedPlugins = features
        .map((item) => featuresToNodeMapping[item].component)
        .flat();
      return { nodes: selectedNodes, components: selectedPlugins };
    }

    const defaultFeatures = {
      nodes: Object.values(featuresToNodeMapping)
        .map((item) => item.node)
        .flat(),
      components: Object.values(featuresToNodeMapping)
        .map((item) => item.component)
        .flat()
    };

    return defaultFeatures;
  }, [features]);

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem);
    }
  };

  const customFeatures = useMemo(() => {
    const featuresContainer = Children.toArray(children).find((child) => {
      return child && isValidElement(child) && child.type === EditorFeatures;
    }) as ReactElement;

    const customFeatureNodes: ReadonlyArray<Klass<LexicalNode>>[] = [];
    const customFeatureElements: ReactElement[] = [];

    if (featuresContainer) {
      Children.toArray(featuresContainer.props.children).forEach((_child) => {
        if (
          _child
          && isValidElement(_child)
          && _child.type === EditorFeatures.Feature
        ) {
          const child = _child as ReactElement<EditorFeatureProps>;
          customFeatureElements.push(child);
          if (child.props.node) {
            if (Array.isArray(child.props.node)) {
              customFeatureNodes.push(...child.props.node);
            } else {
              customFeatureNodes.push(child.props.node);
            }
          }
        }
      });
    }

    return {
      nodes: customFeatureNodes.flat(),
      elements: customFeatureElements
    };
  }, [children]);

  return (
    <LexicalComposer
      initialConfig={{
        ...initialConfig,
        editorState,
        editable,
        nodes: [
          ...supportedFeatures.nodes,
          ...customFeatures.nodes,
          ...(nodes ?? [])
        ]
      }}
    >
      <>{showToolbar && <ToolbarPlugin tools={toolbarTools} />}</>
      <FloatingLinkEditorPlugin anchorElem={floatingAnchorElem} />
      <RichTextPlugin
        contentEditable={(
          <div className="editor-scroller">
            <div
              className="editor"
              style={{
                position: 'relative'
              }}
              ref={onRef}
            >
              <ContentEditable
                style={{
                  width: '400px',
                  minHeight: '120px',
                  border: '2px solid #fff',
                  textAlign: 'left',
                  borderRadius: 5,
                  padding: '12px'
                }}
              />
            </div>
          </div>
        )}
        ErrorBoundary={LexicalErrorBoundary}
        placeholder={<div>Start typing...</div>}
      />
      <HistoryPlugin />
      <ExportPlugin ref={exportRef} />
      <OnChangePlugin onChange={onChange} />
      <>
        {showFloatingToolbar && (
          <FloatingToolbar tools={floatingToolbarTools} />
        )}
      </>
      <>
        {supportedFeatures.components.map((ToolComponent, i) => {
          if (ToolComponent) {
            // eslint-disable-next-line react/no-array-index-key
            return <ToolComponent key={i} />;
          }

          return <></>;
        })}
      </>
      <>
        {customFeatures.elements.map((ToolComponent, i) => {
          if (ToolComponent) {
            // eslint-disable-next-line react/no-array-index-key
            return <Fragment key={i}>{ToolComponent}</Fragment>;
          }

          return <></>;
        })}
      </>
    </LexicalComposer>
  );
};
