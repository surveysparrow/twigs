import { AutoLinkNode, LinkNode } from '@lexical/link';
import { ListItemNode, ListNode } from '@lexical/list';
import { ClearEditorPlugin } from '@lexical/react/LexicalClearEditorPlugin';
import {
  InitialConfigType,
  InitialEditorStateType,
  LexicalComposer
} from '@lexical/react/LexicalComposer';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { HeadingNode } from '@lexical/rich-text';

import { CodeNode } from '@lexical/code';
import { EditorState, LexicalEditor } from 'lexical';
import { ReactNode, RefObject, useMemo } from 'react';
import {
  AutoLinkPlugin,
  DataManagementPlugin,
  DataManagementPluginHandle,
  LinkPlugin,
  TabFocusPlugin
} from './plugins';

import { ToolbarContextPlugin } from './components';

const initialConfig: InitialConfigType = {
  namespace: 'TwigsEditor',
  theme: {
    text: {
      bold: 'text-bold',
      italic: 'text-italic',
      underline: 'text-underline',
      code: 'text-code',
      base: 'text-base',
      highlight: 'text-highlight',
      strikethrough: 'text-strikethrough',
      subscript: 'text-subscript',
      superscript: 'text-superscript',
      underlineStrikethrough: 'text-underline-strikethrough'
    },
    code: 'block-code',
    quote: 'block-quote',
    heading: {
      h1: 'block-h1',
      h2: 'block-h2',
      h3: 'block-h3',
      h4: 'block-h4',
      h5: 'block-h5',
      h6: 'block-h6'
    },
    list: {
      ol: 'block-ol',
      ul: 'block-ul',
      listitem: 'block-listitem'
    }
  },
  onError: (err) => {
    console.error(err);
  }
};

let featureId = 0;

const featuresToNodeMapping = {
  heading: {
    node: HeadingNode,
    component: null
  },
  list: {
    node: [ListNode, ListItemNode],
    component: ListPlugin
  },
  link: {
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
  dataManagementRef
}: {
  editorState?: InitialEditorStateType;
  onChange?: (
    newEditorState: EditorState,
    editor: LexicalEditor,
    tags: Set<string>
  ) => void;
  editable?: boolean;
  children?: ReactNode;
  nodes?: InitialConfigType['nodes'];
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

  return (
    <LexicalComposer
      initialConfig={{
        ...initialConfig,
        editorState,
        editable,
        nodes: [...supportedFeatures.nodes, ...(nodes ?? [])]
      }}
    >
      <ToolbarContextPlugin>
        <HistoryPlugin />
        <ClearEditorPlugin />
        <DataManagementPlugin ref={dataManagementRef} />
        <TabFocusPlugin />
        <>{onChange && <OnChangePlugin onChange={onChange} />}</>
        <>
          {supportedFeatures.components.map((comp) => {
            const ToolComponent = comp.component;
            if (ToolComponent) {
              return <ToolComponent key={comp.id} />;
            }

            return <></>;
          })}
        </>
        <>{children}</>
      </ToolbarContextPlugin>
    </LexicalComposer>
  );
};
