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

import { EditorState, LexicalEditor } from 'lexical';
import {
  Children,
  Fragment,
  ReactElement,
  ReactNode,
  isValidElement,
  useMemo,
  useState
} from 'react';
import { EditorFeatureProps, EditorFeatures } from './features';
import {
  ImageNode,
  KudosNode,
  HashTagNode,
  MentionNode,
  VariableNode
} from './nodes';
import {
  ImagesPlugin,
  AutoLinkPlugin,
  HashTagPlugin,
  KudosPlugin,
  MentionsPlugin,
  ToolbarPlugin,
  VariablesPlugin,
  LinkPlugin,
  FloatingToolbar
} from './plugins';

import FloatingLinkEditorPlugin from './plugins/floating-link-editor';

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
  editorState,
  editable,
  nodes,
  showToolbar,
  features,
  children,
  onChange
}: {
  editorState: EditorState;
  onChange: (
    newEditorState: EditorState,
    editor: LexicalEditor,
    tags: Set<string>
  ) => void;
  editable?: boolean;
  showToolbar?: boolean;
  nodes?: InitialConfigType['nodes'];
  features?: (keyof typeof featuresToNodeMapping)[];
  children?: ReactNode;
}) => {
  const [floatingAnchorElem, setFloatingAnchorElem] = useState<HTMLDivElement | null>(null);
  const [isLinkEditMode, setIsLinkEditMode] = useState<boolean>(false);

  const supportedTools = useMemo(() => {
    if (features) {
      const selectedNodes = features
        .map((item) => featuresToNodeMapping[item].node)
        .flat();

      const selectedPlugins = features
        .map((item) => featuresToNodeMapping[item].component)
        .flat();
      return { nodes: selectedNodes, components: selectedPlugins };
    }

    const defaultTools = {
      nodes: Object.values(featuresToNodeMapping)
        .map((item) => item.node)
        .flat(),
      components: Object.values(featuresToNodeMapping)
        .map((item) => item.component)
        .flat()
    };

    return defaultTools;
  }, [features]);

  console.log(supportedTools);

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem);
    }
  };

  const customFeatures = useMemo(() => {
    const featuresContainer = Children.toArray(children).find((child) => {
      return child && isValidElement(child) && child.type === EditorFeatures;
    }) as ReactElement;

    const customFeatureNodes: (
      | InitialConfigType['nodes']
      | InitialConfigType['nodes'][]
    )[] = [];
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
            customFeatureNodes.push(child.props.node);
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
          ...supportedTools.nodes,
          ...customFeatures.nodes,
          ...(nodes || [])
        ]
      }}
    >
      <>{showToolbar && <ToolbarPlugin />}</>
      <FloatingToolbar />
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
      <OnChangePlugin onChange={onChange} />
      <>
        {supportedTools.components.map((ToolComponent, i) => {
          if (ToolComponent) {
            return <ToolComponent key={i} />;
          }

          return <></>;
        })}
      </>
      <>
        {customFeatures.elements.map((ToolComponent, i) => {
          if (ToolComponent) {
            return <Fragment key={i}>{ToolComponent}</Fragment>;
          }

          return <></>;
        })}
      </>
    </LexicalComposer>
  );
};
