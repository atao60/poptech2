import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

export enum Scheme { light, dark };

const defaultScheme = Scheme.light;

const localStorageTag = 'prefers-scheme';

const prefersColorSchemeTag = 'prefers-color-scheme';

const themePrefix= 'theme-';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private currentScheme: Scheme;
  private readonly renderer: Renderer2;

  constructor(readonly rendererFactory2: RendererFactory2) {
    this.renderer = rendererFactory2.createRenderer(null, null);
    this.currentScheme = defaultScheme;
  }

  get scheme() {
    return this.currentScheme;
  }

  load() {
    const scheme = this.getCurrentScheme();
    this.add(scheme);
    this.remove(scheme === Scheme.dark ? Scheme.light : Scheme.dark);
  }

  update() {
    const updatedScheme = this.scheme === Scheme.dark ? Scheme.light : Scheme.dark;
    this.remove(this.scheme);
    this.add(updatedScheme);
    localStorage.setItem(localStorageTag, Scheme[updatedScheme]);
    this.currentScheme = updatedScheme;
  }

  private remove(scheme: Scheme) {
    this.renderer.removeClass(document.body, `${themePrefix}${Scheme[scheme]}`);
  }

  private add(scheme: Scheme) {
    this.renderer.addClass(document.body, `${themePrefix}${Scheme[scheme]}`);
  }

  private getCurrentScheme() {
    const scheme = localStorage.getItem(localStorageTag);
    if (scheme != null) {
      this.currentScheme = (<any>Scheme)[scheme];
    }
    else if (window.matchMedia(`(${prefersColorSchemeTag})`).media !== 'not all') {
      this.currentScheme = window.matchMedia(`(${prefersColorSchemeTag}: ${Scheme[Scheme.dark]})`).matches
        ? Scheme.dark
        : Scheme.light;
    }
    else {
      // default to light theme if browser does not support prefers-color-scheme
      this.currentScheme = defaultScheme;
    }
    return this.currentScheme;
  }
}
