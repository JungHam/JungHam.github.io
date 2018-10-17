---
permalink: /projects/InFactory/
title: "InFactory : IndoorGML 데이터 생성을 위한 RESTful 서버" 
---

What is InFactory?
==================

## Purpose of InFactoy

InFactory is a RESTful API server that constructs [IndoorGML](http://www.opengeospatial.org/standards/indoorgml) documents using indoor spatial data of users based on Restful API. It is possible to generate the data of the attributes and geometry data of each element in IndoorGML by sending these information to InFactory in simple JSON format.

![InFactoryIntro](./InFactory_intro.png)

IndoorGML is a standard of Open Geospatial Consortium for expressing indoor space data in XML document. Before implementation of InFactory, IndoorGML document is hard to create because of the encoding of XML and understanding the schema of IndoorGML. InFactory solves those problem to support user to create IndoorGML easily.  


## How to use InFactory

There are two ways to use InFactory;

* [RESTFul CRUD API](https://github.com/STEMLab/InFactory/wiki/RESTful-API)
* [Java API](https://github.com/STEMLab/InFactory/wiki/CRUD-API)

## InFactory Use-Cases

* [InEditor](https://github.com/STEMLab/InEditor)

This is a Web-based IndoorGML 2D graphic editor. InEditor uses InFactory by sending the requests which holds the editing results of IndoorGML elements to the server and get the result as a IndoorGML document. You can check how to use InEditor with InFactory by the [Demo](https://www.youtube.com/watch?v=eW2Tpq2Yk_c&feature=youtu.be).

* Any application for building IndoorGML data

InFactory can be used as a stand-alone server. Any client application which sends HTTP requests to a server can use InFactory server to create a IndoorGML document.

## Guideline of this wiki

* For the sample code and quick start -> Quick start
  * How to send the request to the RESTful server of InFactory -> [RESTful API](https://github.com/STEMLab/InFactory/wiki/RESTful-API)
  * How to use Java API with sample code -> [Java API](https://github.com/STEMLab/InFactory/wiki/CRUD-API)
* For the detail instruction -> Advanced
  * the implementation of the feature class of IndoorGML in InFactory -> [Feature Class](https://github.com/STEMLab/InFactory/wiki/Feature-class)
  * the data format that RESTful API accepts -> [JSON-formats](https://github.com/STEMLab/InFactory/wiki/JSON-format)
  * the specification of the geometry data -> [Geometry](https://github.com/STEMLab/InFactory/wiki/Geometry)



## References

* IndoorGML schemas and documents :
http://www.opengeospatial.org/standards/indoorgml

* IndoorGML development source and data including in-progress : http://www.indoorgml.net/

* Jeong, Hyemi, Hyung-gyu Ryoo, and Ki-Joune Li. "INFACTORY: A RESTFUL API SERVER FOR EASILY CREATINGINDOORGML." International Archives of the Photogrammetry, Remote Sensing & Spatial Information Sciences 42 (2018).

* [ogc-schemas](https://github.com/highsource/ogc-schemas) - JAXB Bindings for OGC xml schemas
