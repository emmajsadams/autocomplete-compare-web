# Blazor

Blazor is a C# WebAssembly framework for creating full-stack C# web apps. It still uses the DOM and CSS, but instead of JavaScript it allows C# in the browser. This project's structure is based on https://github.com/aspnet/samples/tree/master/samples/aspnetcore/blazor/FlightFinder. Please see https://github.com/aspnet/Blazor for more info.

## Setup
* Install Ruby (Mac users can skip this and use system default ruby) - https://www.ruby-lang.org/en/documentation/installation/
* Install SASS - https://sass-lang.com/install

# Evaluation

## Cruical missing features
* Not all dom events are implemented. Crucial events like onkeydown and oninput are not implemented which prevent a true autocomplete experience.

## Nice to have missing features
* Livereload. Currently any changes to C# or cshmtl require a full rebuild.

# Style

Styles are managed via sass. The main sass file is located in `FlightFinder.Client/wwwroot/sass/index.scss` which needs to be compiled down to css located at `FlightFinder.Client/wwwroot/index.css`. This project uses the ruby `sass` gem to accomplish this on change.


2) Setup SASS watch in separate terminal from run - `sass --watch FlightFinder.Client/wwwroot/sass/index.scss:FlightFinder.Client/wwwroot/index.css`