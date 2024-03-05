FROM maven:3.9.6-eclipse-temurin-21-alpine as build

COPY . /app
WORKDIR /app

RUN mvn clean install

FROM openjdk:21
COPY --from=build /app/target/app.jar .

EXPOSE 8080

ENTRYPOINT [ "/bin/sh", "-c", "java -jar app.jar" ]