import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Check, Continuous, Download, Downloaded, History, Home, Library, Loop, Menu, Next, Pause, Play, Previous, Repeat, Search, Sequential, Settings, Shuffle, X
} from "@assets";
import { FC } from "react";
import { SvgProps } from "react-native-svg";

export type Icon = keyof typeof Icons;

export const Icons = {
    'ArrowDown': ArrowDown,
    'ArrowLeft': ArrowLeft,
    'ArrowRight': ArrowRight,
    'ArrowUp': ArrowUp,
    'Check': Check,
    'Continuous': Continuous,
    'Download': Download,
    'Downloaded': Downloaded,
    'History': History,
    'Home': Home,
    'Library': Library,
    'Loop': Loop,
    'Menu': Menu,
    'Next': Next,
    'Pause': Pause,
    'Play': Play,
    'Previous': Previous,
    'Repeat': Repeat,
    'Search': Search,
    'Sequential': Sequential,
    'Settings': Settings,
    'Shuffle': Shuffle,
    'X': X,
};
