import { IDropdownOpt } from './types/types';

export const dropdownOptions: IDropdownOpt[] = [
  {
    displayName: 'Demos',
    nestedOpt: [
      { displayName: 'Option 1', nestedOpt: [] },
      { displayName: 'Option 2', nestedOpt: [] },
      { displayName: 'Option 3', nestedOpt: [] },
    ],
  },
  {
    displayName: 'Post',
    nestedOpt: [
      {
        displayName: 'Post Header',
        nestedOpt: [
          { displayName: 'Option 1', nestedOpt: [] },
          { displayName: 'Option 2', nestedOpt: [] },
          { displayName: 'Option 3', nestedOpt: [] },
          { displayName: 'Option 4', nestedOpt: [] },
        ],
      },
      {
        displayName: 'Post Layout',
        nestedOpt: [
          { displayName: 'Option 1', nestedOpt: [] },
          { displayName: 'Option 2', nestedOpt: [] },
          { displayName: 'Option 3', nestedOpt: [] },
        ],
      },
      {
        displayName: 'Share Buttons',
        nestedOpt: [
          { displayName: 'Option 1', nestedOpt: [] },
          { displayName: 'Option 2', nestedOpt: [] },
          { displayName: 'Option 3', nestedOpt: [] },
        ],
      },
      {
        displayName: 'Gallery Post',
        nestedOpt: [
          { displayName: 'Option 1', nestedOpt: [] },
          { displayName: 'Option 2', nestedOpt: [] },
          { displayName: 'Option 3', nestedOpt: [] },
        ],
      },
      {
        displayName: 'Video Post',
        nestedOpt: [
          { displayName: 'Option 1', nestedOpt: [] },
          { displayName: 'Option 2', nestedOpt: [] },
          { displayName: 'Option 3', nestedOpt: [] },
        ],
      },
    ],
  },
  {
    displayName: 'Features',
    nestedOpt: [
      { displayName: 'Option 1', nestedOpt: [] },
      { displayName: 'Option 2', nestedOpt: [] },
      { displayName: 'Option 3', nestedOpt: [] },
    ],
  },
  {
    displayName: 'Categories',
    nestedOpt: [
      { displayName: 'Option 1', nestedOpt: [] },
      { displayName: 'Option 2', nestedOpt: [] },
    ],
  },
  {
    displayName: 'Shop',
    nestedOpt: [
      { displayName: 'Option 1', nestedOpt: [] },
      { displayName: 'Option 2', nestedOpt: [] },
    ],
  },
  { displayName: 'Buy Now', nestedOpt: [] },
];
