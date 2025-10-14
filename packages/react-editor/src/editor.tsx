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
import {
  Fragment, ReactNode, RefObject, useMemo
} from 'react';
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
      listitem: 'block-listitem',
      nested: {
        list: 'block-nested-list',
        listitem: 'block-nested-listitem'
      },
      olDepth: ['level-1', 'level-2', 'level-3', 'level-4', 'level-5', 'level-6', 'level-7', 'level-8', 'level-9', 'level-10'],
      ulDepth: ['level-1', 'level-2', 'level-3', 'level-4', 'level-5', 'level-6', 'level-7', 'level-8', 'level-9', 'level-10']
    }
  },
  onError: (err) => {
    // eslint-disable-next-line no-console
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

export interface EditorProps {
  initialEditorState?: InitialEditorStateType;
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
  onChangePluginProps?: {
    ignoreHistoryMergeTagChange?: boolean;
    ignoreSelectionChange?: boolean;
  };
}

export const Editor = ({
  nodes,
  onChange,
  editable,
  features,
  children,
  initialEditorState,
  dataManagementRef,
  onChangePluginProps
}: EditorProps) => {
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
        editorState: initialEditorState,
        editable,
        nodes: [...supportedFeatures.nodes, ...(nodes ?? [])]
      }}
    >
      <ToolbarContextPlugin>
        <HistoryPlugin />
        <ClearEditorPlugin />
        <DataManagementPlugin ref={dataManagementRef} />
        <TabFocusPlugin />
        <>
          {onChange && (
            <OnChangePlugin onChange={onChange} {...onChangePluginProps} />
          )}
        </>
        <>
          {supportedFeatures.components.map((comp) => {
            const ToolComponent = comp.component;
            if (ToolComponent) {
              return <ToolComponent key={comp.id} />;
            }

            return <Fragment key={comp.id} />;
          })}
        </>
        <>{children}</>
      </ToolbarContextPlugin>
    </LexicalComposer>
  );
};
