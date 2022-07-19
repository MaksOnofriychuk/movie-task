import {nanoid} from "@reduxjs/toolkit";
import {TCheckBoxOptions} from "../../ComponentTypes/types";

export const checkBoxOptions: TCheckBoxOptions[] = [
  {
    id: nanoid(),
    title: 'Stream',
    withWatchFilter: 'flatrate',
    checked: false,
  },
  {
    id: nanoid(),
    title: 'Free',
    withWatchFilter: 'free',
    checked: false,
  },
  {
    id: nanoid(),
    title: 'Ads',
    withWatchFilter: 'ads',
    checked: false,
  },
  {
    id: nanoid(),
    title: 'Rent',
    withWatchFilter: 'rent',
    checked: false,
  },
  {
    id: nanoid(),
    title: 'Buy',
    withWatchFilter: 'buy',
    checked: false,
  }
]