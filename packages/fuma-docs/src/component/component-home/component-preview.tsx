import React from "react";
import {
  AccordionSkeleton,
  AvatarSkeleton,
  ChipSkeleton,
  ImageSkeleton,
  TableSkeleton,
  AlertDialogSkeleton,
  DialogSkeleton,
  DrawerSkeleton,
  DropdownSkeleton,
  HoverCardSkeleton,
  PopoverSkeleton,
  ToastSkeleton,
  BoxSkeleton,
  FlexSkeleton,
  GridSkeleton,
  StackSkeleton,
  ButtonSkeleton,
  IconButtonSkeleton,
  SplitButtonSkeleton,
  CheckboxSkeleton,
  FormHelperTextSkeleton,
  FormLabelSkeleton,
  FormInputSkeleton,
  InputSkeleton,
  RadioSkeleton,
  SelectSkeleton,
  SeparatorSkeleton,
  SwitchSkeleton,
  SliderSkeleton,
  TextareaSkeleton,
  TooltipSkeleton,
  AlertSkeleton,
  CascaderSkeleton,
  CircleLoaderSkeleton,
  LineLoaderSkeleton,
  TabsSkeleton,
  LinkSkeleton,
  PaginationSkeleton,
  StepperSkeleton,
  CalendarRangeSkeleton,
  CalendarSkeleton,
  DatePickerSkeleton,
  TimePickerSkeleton,
  DefaultSkeleton,
} from "./skeletons";

// Component Preview Renderer
export function ComponentPreview({ title }: { title: string }) {
  switch (title) {
    case "Accordion":
      return <AccordionSkeleton />;
    case "Avatar":
      return <AvatarSkeleton />;
    case "Chip":
      return <ChipSkeleton />;
    case "Image":
      return <ImageSkeleton />;
    case "Table":
      return <TableSkeleton />;
    case "Alert Dialog":
      return <AlertDialogSkeleton />;
    case "Dialog":
      return <DialogSkeleton />;
    case "Drawer":
      return <DrawerSkeleton />;
    case "Dropdown":
      return <DropdownSkeleton />;
    case "Hover Card":
      return <HoverCardSkeleton />;
    case "Popover":
      return <PopoverSkeleton />;
    case "Toast":
      return <ToastSkeleton />;
    case "Box":
      return <BoxSkeleton />;
    case "Flex":
      return <FlexSkeleton />;
    case "Grid":
      return <GridSkeleton />;
    case "Stack":
      return <StackSkeleton />;
    case "Button":
      return <ButtonSkeleton />;
    case "Icon Button":
      return <IconButtonSkeleton />;
    case "Split Button":
      return <SplitButtonSkeleton />;
    case "Checkbox":
      return <CheckboxSkeleton />;
    case "Form Helper Text":
      return <FormHelperTextSkeleton />;
    case "Form Label":
      return <FormLabelSkeleton />;
    case "Form Input":
      return <FormInputSkeleton />;
    case "Input":
      return <InputSkeleton />;
    case "Radio":
      return <RadioSkeleton />;
    case "Select":
      return <SelectSkeleton />;
    case "Separator":
      return <SeparatorSkeleton />;
    case "Switch":
      return <SwitchSkeleton />;
    case "Slider":
      return <SliderSkeleton />;
    case "Textarea":
      return <TextareaSkeleton />;
    case "Tooltip":
      return <TooltipSkeleton />;
    case "Alert":
      return <AlertSkeleton />;
    case "Cascader":
      return <CascaderSkeleton />;
    case "Circle Loader":
      return <CircleLoaderSkeleton />;
    case "Line Loader":
      return <LineLoaderSkeleton />;
    case "Tabs":
      return <TabsSkeleton />;
    case "Link":
      return <LinkSkeleton />;
    case "Pagination":
      return <PaginationSkeleton />;
    case "Stepper":
      return <StepperSkeleton />;
    case "Calendar Range":
      return <CalendarRangeSkeleton />;
    case "Calendar":
      return <CalendarSkeleton />;
    case "DatePicker":
      return <DatePickerSkeleton />;
    case "TimePicker":
      return <TimePickerSkeleton />;
    default:
      return <DefaultSkeleton title={title} />;
  }
}
