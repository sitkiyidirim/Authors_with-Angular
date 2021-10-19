# Angular 

Projemiz anguların genel yapısında bulunan tüm özellikleri kullanan bir proje.
gerçek bir işe uygun olarak bir projede bulunan temel özelliklerinin tümünün kullanıldığı 
ve büyük bir proje yapısına uygun olarak performans ve dizayna özellikle dikkat edilmiştir. 
Gerektiği kadar az kod ile çok iş yapma fikri temel alınmıştır. Bu baplamda bootsrap gibi kütiphanelerden 
yararlanılmıştır.

# Projemizde kullandığmız performans açısından öne çıkan başlıklar

# Lazy Loading

Herhangi bir modulü, sadece ihtiyaç halinde temin etme durumu tam olarak Lazy Loading’in yaptığı işi özetliyor. Teknik olarak açıklayacak olursak,
İsteğe bağlı olarak modüllerin yüklenmesi işlemidir.(Js, CSS, video, doküman, resim vb.)

       örenek olarak gösterecek  olursak projemizde bulunan lazy loading kullanılmadan proje ilk yüklendiğinde yüklenen iş parçacıkları 
          {path:'librarian', canActivate:[LibrarianLoginControl], component:LibrarianComponent},
          {path:'librarilogin',component:LibrarianLoginComponent},
          
       Lazy loading kullanılarak sadece ihtiyaç olduğu zaman çağrılan modüller
          {path:'repositor', loadChildren:()=>import('./repository/repository.module').then(m=>m.RepositoryModule)},
          {path:'outhers', loadChildren:()=>import('./outhers/outhers.module').then(m=>m.OuthersModule)}

# Angular Dynamic Table

  Neden: Tablo bir temel öğedir ve neredeyse her sayfada bir veri listesini görüntülemek için kullanılır; bu, bir kitaplık veya 
  widget olmadan birden fazla tablonuz ve yinelenen uygulamanız olacağı anlamına gelir. Aslında tablo işlevleri hep aynı, sadece tasarım ve içerik olarak öne çıkıyor.


# Arayüz
![Ekran görüntüsü 2021-10-18 160722](https://user-images.githubusercontent.com/75735880/137738039-3bc51006-a649-4be6-8d74-e22f3ed9a92f.png)

![Ekran görüntüsü 2021-10-18 161108](https://user-images.githubusercontent.com/75735880/137737958-c8bee52f-2c93-4f64-b2a5-b0c30742bf7e.png)

# Nasıl çalıştırılır?

  sırayla yapılması gerekenler
- npm run json  komutu çalıştırılarak json veriler hazırlanılır
- ng serve --open komutu çalıştırılarak localhostata proje çalıştırılır. 
- npm run compodoc komutu çalıştırılarak projenin kod yapısı çok daha rahat bir şekilde compodoctan anlaşılabilir


# Authors

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
