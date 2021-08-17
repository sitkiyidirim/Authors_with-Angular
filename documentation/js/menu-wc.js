'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">authors documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-304ce5733a97c6507e90f317a2c2f099"' : 'data-target="#xs-components-links-module-AppModule-304ce5733a97c6507e90f317a2c2f099"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-304ce5733a97c6507e90f317a2c2f099"' :
                                            'id="xs-components-links-module-AppModule-304ce5733a97c6507e90f317a2c2f099"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-304ce5733a97c6507e90f317a2c2f099"' : 'data-target="#xs-injectables-links-module-AppModule-304ce5733a97c6507e90f317a2c2f099"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-304ce5733a97c6507e90f317a2c2f099"' :
                                        'id="xs-injectables-links-module-AppModule-304ce5733a97c6507e90f317a2c2f099"' }>
                                        <li class="link">
                                            <a href="injectables/LoginService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RegisterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-29f834bb9045af5223b8a99cd7582f9e"' : 'data-target="#xs-components-links-module-HomeModule-29f834bb9045af5223b8a99cd7582f9e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-29f834bb9045af5223b8a99cd7582f9e"' :
                                            'id="xs-components-links-module-HomeModule-29f834bb9045af5223b8a99cd7582f9e"' }>
                                            <li class="link">
                                                <a href="components/BooksallComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BooksallComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailBookComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetailBookComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailChildComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetailChildComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LibrarianComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LibrarianComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LibrarianLoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LibrarianLoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OutherBooksComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OutherBooksComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-HomeModule-29f834bb9045af5223b8a99cd7582f9e"' : 'data-target="#xs-injectables-links-module-HomeModule-29f834bb9045af5223b8a99cd7582f9e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HomeModule-29f834bb9045af5223b8a99cd7582f9e"' :
                                        'id="xs-injectables-links-module-HomeModule-29f834bb9045af5223b8a99cd7582f9e"' }>
                                        <li class="link">
                                            <a href="injectables/BoksgetService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BoksgetService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LibraryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LibraryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OuthersModule.html" data-type="entity-link" >OuthersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OuthersModule-432a640e963c44a06d6140492b453f2f"' : 'data-target="#xs-components-links-module-OuthersModule-432a640e963c44a06d6140492b453f2f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OuthersModule-432a640e963c44a06d6140492b453f2f"' :
                                            'id="xs-components-links-module-OuthersModule-432a640e963c44a06d6140492b453f2f"' }>
                                            <li class="link">
                                                <a href="components/OuthersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OuthersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-OuthersModule-432a640e963c44a06d6140492b453f2f"' : 'data-target="#xs-injectables-links-module-OuthersModule-432a640e963c44a06d6140492b453f2f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OuthersModule-432a640e963c44a06d6140492b453f2f"' :
                                        'id="xs-injectables-links-module-OuthersModule-432a640e963c44a06d6140492b453f2f"' }>
                                        <li class="link">
                                            <a href="injectables/OutherService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OutherService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OuthersRoutingModule.html" data-type="entity-link" >OuthersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RepositoryModule.html" data-type="entity-link" >RepositoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RepositoryModule-58f1eea446e727f2cf25d10288146f84"' : 'data-target="#xs-components-links-module-RepositoryModule-58f1eea446e727f2cf25d10288146f84"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RepositoryModule-58f1eea446e727f2cf25d10288146f84"' :
                                            'id="xs-components-links-module-RepositoryModule-58f1eea446e727f2cf25d10288146f84"' }>
                                            <li class="link">
                                                <a href="components/RepositoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RepositoryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RepositoryRoutingModule.html" data-type="entity-link" >RepositoryRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ImgValidators.html" data-type="entity-link" >ImgValidators</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/BoksgetService.html" data-type="entity-link" >BoksgetService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LibraryService.html" data-type="entity-link" >LibraryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link" >LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OutherService.html" data-type="entity-link" >OutherService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RegisterService.html" data-type="entity-link" >RegisterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RepoService.html" data-type="entity-link" >RepoService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/LibrarianLoginControl.html" data-type="entity-link" >LibrarianLoginControl</a>
                            </li>
                            <li class="link">
                                <a href="guards/LoginControl.html" data-type="entity-link" >LoginControl</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});