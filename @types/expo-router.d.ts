// types/expo-router.d.ts

import 'expo-router';
import { Href } from 'expo-router';

// Extend the Router interface to accept string | object for replace and other methods
declare module 'expo-router' {
  interface Router {
    replace(href: Href<string | object>): void;
    push(href: Href<string | object>): void;
    prefetch(href: Href<string | object>): void;
    back(): void;
    // Add other methods if necessary
  }

  // If Href is a generic type that can accept string | object by default,
  // ensure that it does. Otherwise, you might need to redefine or extend it.
}
