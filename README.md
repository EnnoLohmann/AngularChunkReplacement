# AngularChunkReplacement

A compiled Angular application consists of a bunch of bundles which present the modules and components.
Lazy loaded components are stored as an own chunk file.

This POC will show how you can develope the modules of an application independently and update on chunk without rebuilding the complete apllication.

## Structure
This Repository consists of multiple Branches. Each branch can be changed independently from others.

### Master Branch
The Masterbranch contains the Entrypoint for the application and the shared services. 
To prevent inconsistency in the vendor/common bundles every third party library should be included in the shared module inside the master branch.
The Masterbranch includes empty representations of all Modules which will be included later.

### Feature Branches
The other branches are for the development of the features. Each of the features should be deveoped independently. If one feature is updated only the one Branch should be build new and not the complete application.

## Goal
So what do i want to show in this repository? I want to develope an angular application which consists out of multiple individual modules. These Modules are lazy loaded. Each module should be developed without influence other Modules. The application will be build manually. The bundles will be taken from the build master module and the chunks from the build feature modules. The empty chunks in the master will be overwritten with the build chunks from the feature branches.

![alt text](https://github.com/EnnoLohmann/AngularChunkReplacement/blob/master/CreatingApp.png)

## Advantages
The features can be developed independently. Each tean can work on one Feature and don´t have to pay attention to the other Teams. They can make changes inside the module which don´t affect the rest of the application.

No need to rebuild the complete application on updates. If you have a big angular application the rebuild could take long time. In this example you only have to build the one feature module on which you are working.

Possibility to manage different versions of you branches. You can fork your feature branches and have different versions of your Modules. When you composite your application you can combine the different versions of your Modules.

## Limitations
Due to the build process of angular and the bundling there are some situations in which this approach won´t work. 
### Third Party Libraries
(only in production build)You can use third party libraries but the set of libraries have to be fix. Each Module have references to the vendor.bundle and if the set of libraries change your references break. So if you add new libraries to the application it´s possible that you have to rebase the feature branches and build everything new. Old versions of your chunks won´t be compatible to the new chunks and bundles. (only in production build)

Another problem is the optimization from Angular bundling. If multiple modules use the same libraries the will be put in a common-module. To prevent this all libraries will bei imported in the shared module and only the shared module is imported in the featue modules.

### Services dependency injection
Angular only provides the Services if there is anyone who uses it. If you build the main application only with the stubs it´s possible to have missing instances für injected servcies. To prevent this there is a Dummy Component in which every global service injected.

### Angular Optimization
Angular have in the production build some optimization which break the compatibility of the different versions of the chunks. The Uglifying can break the references. To prevent this just build in dev mode. Also don´t use the hashing in the names because it will prevent that every version of the chunk have the same filename.
