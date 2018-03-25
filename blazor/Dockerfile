FROM microsoft/dotnet:2.1-sdk
COPY . .
WORKDIR ./FlightFinder.Server
EXPOSE 5000


# TODO Replace with published run
# RUN dotnet publish -c release -o published
# RUN dotnet published/FlightFinder.Server.dll
CMD dotnet run

# TODO: Separate docker file for sass and stuff?
#
# DockerFile
# RUN gem install sass --no-user-install
# FROM ruby:2.3.0
# RUN dotnet run & sass --watch ../FlightFinder.Client/wwwroot/sass/index.scss:../FlightFinder.Client/wwwroot/index.css && kill $!
# 
# CMD
# docker run -i -t --rm -p 80:5000 --name web-compare web-compare

