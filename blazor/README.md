# Blazor

Blazor is a C# WebAssembly framework for creating full-stack C# web apps. It still uses the DOM and CSS, but instead of JavaScript it allows C# in the browser. This project's structure is based on https://github.com/aspnet/samples/tree/master/samples/aspnetcore/blazor/FlightFinder. Please see https://github.com/aspnet/Blazor for more info.

Styles are managed via sass. The main sass file is located in `FlightFinder.Client/wwwroot/sass/index.scss` which needs to be compiled down to css located at `FlightFinder.Client/wwwroot/index.css`. This project uses the ruby `sass` gem to accomplish this on change.

NOTE: Project and solutions still use the name FlightFinder that was borrowed from the linked example. This name will eventually be changed.

## Deploy
* Install Docker https://docs.docker.com/install/
* Create docker-machine with name `web-compare` as target for deployment
* Run ./deploy

# Development
* Install Ruby (Mac users can skip this and use system default ruby) - https://www.ruby-lang.org/en/documentation/installation/
* Install SASS - https://sass-lang.com/install
* Install dotnet & blazor - https://blogs.msdn.microsoft.com/webdev/2018/03/22/get-started-building-net-web-apps-in-the-browser-with-blazor/#get-started
* Run ./dev

# Evaluation

## Crucial missing features
* Not all dom events are implemented. Crucial events like onkeydown and oninput are not implemented which prevent a true autocomplete experience.

# Reading
* Docker Digital Ocean - https://docs.docker.com/machine/drivers/digital-ocean/#when-passing-a-boolean-value-to-any-option
* Docker-Machine - https://docs.docker.com/machine/get-started/
* Building Docker Images for .NET Core Applications - https://docs.microsoft.com/en-us/dotnet/core/docker/building-net-docker-images
