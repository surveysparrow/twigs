import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { createRoot } from 'react-dom/client';
import { act } from 'react-test-renderer';
import {
  Tabs, TabsList, TabsTrigger, TabsContent,
} from '../index';

describe('tabs', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div!);
    act(() => {
      root.render(
        <Tabs defaultValue="tab1">
          <TabsList
            aria-label="tabs example"
            css={{ display: 'flex', alignItems: 'center', height: '$18' }}
          >
            <TabsTrigger value="tab1">One</TabsTrigger>
            <TabsTrigger value="tab2">Two</TabsTrigger>
            <TabsTrigger value="tab3">Three</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <TabsContent css={{ p: '$16' }} value="tab1">
              Tab one content
            </TabsContent>
            <TabsContent css={{ p: '$16' }} value="tab2">
              Tab two content
            </TabsContent>
            <TabsContent css={{ p: '$16' }} value="tab3">
              Tab three content
            </TabsContent>
          </TabsContent>
        </Tabs>,
      );
      root.unmount();
    });
  });
});
