import { AutoLinkNode, LinkNode } from '@lexical/link';
import { ListItemNode, ListNode } from '@lexical/list';
import { ClearEditorPlugin } from '@lexical/react/LexicalClearEditorPlugin';
import {
  InitialConfigType,
  LexicalComposer
} from '@lexical/react/LexicalComposer';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { HeadingNode } from '@lexical/rich-text';

import { CodeNode } from '@lexical/code';
import {
  EditorState, Klass, LexicalEditor, LexicalNode
} from 'lexical';
import {
  Fragment,
  ReactElement,
  ReactNode,
  RefObject,
  isValidElement,
  useMemo
} from 'react';
import { EditorFeatureProps, EditorFeatures } from './features';
import {
  AutoLinkPlugin,
  DataManagementPlugin,
  DataManagementPluginHandle,
  DialogLinkEditorPlugin,
  FloatingToolbar,
  FloatingToolbarTools,
  LinkPlugin,
  TabFocusPlugin,
  ToolbarPlugin,
  ToolbarTools
} from './plugins';

import { EditorArea } from './components/editor-area';
import {
  findReactChildByType,
  findReactChildrenByType
} from './utils/findReactChild';

const initialConfig: InitialConfigType = {
  namespace: 'MyEditor',
  theme: {
    text: {
      bold: 'text-bold',
      italic: 'text-italic',
      underline: 'text-underline',
      code: 'text-code'
    },
    code: 'block-code'
  },
  onError: (err) => {
    console.error(err);
  }
};

let featureId = 0;
let customFeatureId = 0;

const featuresToNodeMapping = {
  headings: {
    node: HeadingNode,
    component: null
  },
  lists: {
    node: [ListNode, ListItemNode],
    component: ListPlugin
  },
  links: {
    node: [LinkNode, AutoLinkNode],
    component: [AutoLinkPlugin, LinkPlugin]
  },
  code: {
    node: [CodeNode],
    component: null
  }
};

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
  dataManagementRef
}: {
  editorState?: EditorState;
  onChange?: (
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
  dataManagementRef?: RefObject<DataManagementPluginHandle>;
}) => {
  const supportedFeatures = useMemo(() => {
    if (features) {
      const selectedNodes = features
        .map((item) => featuresToNodeMapping[item].node)
        .flat();

      const selectedPlugins = features
        .map((item) => featuresToNodeMapping[item].component)
        .flat()
        .map((item) => ({ component: item, id: featureId++ }));

      return { nodes: selectedNodes, components: selectedPlugins };
    }

    const defaultFeatures = {
      nodes: Object.values(featuresToNodeMapping)
        .map((item) => item.node)
        .flat(),
      components: Object.values(featuresToNodeMapping)
        .map((item) => item.component)
        .flat()
        .map((item) => ({ component: item, id: featureId++ }))
    };

    return defaultFeatures;
  }, [features]);

  const customFeatures = useMemo(() => {
    const featuresContainer = findReactChildByType(
      children,
      EditorFeatures
    ) as ReactElement;

    const customFeatureNodes: ReadonlyArray<Klass<LexicalNode>>[] = [];
    const customFeatureElements: ReactElement[] = [];

    if (featuresContainer) {
      findReactChildrenByType(
        featuresContainer.props.children,
        EditorFeatures.Feature
      ).forEach((_child) => {
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
      elements: customFeatureElements.map((item) => ({
        component: item,
        id: customFeatureId++
      }))
    };
  }, [children]);

  const customContent = useMemo(() => {
    const content = findReactChildByType(
      children,
      EditorFeatures.Content
    ) as ReactElement;

    if (content) {
      return content;
    }
    return null;
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
      <EditorArea />
      <DialogLinkEditorPlugin />
      <HistoryPlugin />
      <ClearEditorPlugin />
      <DataManagementPlugin ref={dataManagementRef} />
      <TabFocusPlugin />
      <>{onChange && <OnChangePlugin onChange={onChange} />}</>
      <>
        {showFloatingToolbar && (
          <FloatingToolbar tools={floatingToolbarTools} />
        )}
      </>
      <>
        {supportedFeatures.components.map((comp) => {
          const ToolComponent = comp.component;
          if (ToolComponent) {
            return <ToolComponent key={comp.id} />;
          }

          return <></>;
        })}
      </>
      <>
        {customFeatures.elements.map((comp) => {
          if (comp.component) {
            return <Fragment key={comp.id}>{comp.component}</Fragment>;
          }

          return <></>;
        })}
      </>
      <>{customContent}</>
    </LexicalComposer>
  );
};
