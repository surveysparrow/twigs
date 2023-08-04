// import { Button, Input, Flex, Checkbox, Radio, Select, FormInput, FormLabel, RadioGroup, Switch, FormHelperText, Text, Heading, Link, Pagination, Stepper, Tabs } from '@site/../react-components/dist/index';
// import { ArrowLeftIcon, SearchIcon, UserIcon } from '@site/../react-icons/dist/index';
import React from 'react';
import { twigsComponentLoader, twigsIconLoader } from './twigs-loader';

const ReactLiveScope = {
  React,
  ...React,
  Button: twigsComponentLoader("Button"),
  Flex: twigsComponentLoader("Flex"),
  Input: twigsComponentLoader("Input"),
  Checkbox: twigsComponentLoader("Checkbox"),
  Radio: twigsComponentLoader("Radio"),
  Select: twigsComponentLoader("Select"),
  FormInput: twigsComponentLoader("FormInput"),
  FormLabel: twigsComponentLoader("FormLabel"),
  RadioGroup: twigsComponentLoader("RadioGroup"),
  Switch: twigsComponentLoader("Switch"),
  FormHelperText: twigsComponentLoader("FormHelperText"),
  Text: twigsComponentLoader("Text"),
  Heading: twigsComponentLoader("Heading"),
  Link: twigsComponentLoader("Link"),
  Pagination: twigsComponentLoader("Pagination"),
  Stepper: twigsComponentLoader("Stepper"),
  Tabs: twigsComponentLoader("Tabs"),
  ArrowLeftIcon: twigsIconLoader("ArrowLeftIcon"),
  SearchIcon: twigsIconLoader("SearchIcon"),
  UserIcon: twigsIconLoader("UserIcon")
};
export default ReactLiveScope;
