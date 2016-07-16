/**
 * Created by cdimizas on 16/7/2016.
 */

angular.module('lorawanMapApp')

// WORK EXPERIENCE
    .factory('workExpFactory', function() {

        var workExp = {};

        var workList = [
            {
                _id:0,
                workName: "Software Engineer",
                companyName:"SciFY N.P.O.",
                companyDescription:"",
                companyImage: "images/scify_logo_108.png",
                date: "May 2015 - April 2016",
                url:"http://www.scify.gr/site/el/",
                details: ["Implementing mockups designs with HTML5, CSS3, JavaScript & JQuery.",
                    "PHP wed based MVC projects (Laravel 5 Framework). Both front-end & back-end development according to mockups designs and client’s specifications.",
                    "Customer requirements collection & specifications analysis.",
                    "CMS Projects development (Drupal, WordPress).",
                ],
                topProjects:[
                    {
                        projectName:"Benefile Platform",
                        projectURL:"http://benefile-project.scify.org/",
                        projectDetails:"Enables PRAKSIS N.P.O. to maintain an online administration of immigrants medical and personal information.",
                        responsibilities:"PHP MVC development (Laravel 5 framework), Front-end & Back-end platform development."
                    },
                    {
                        projectName:"EKPIZO N.P.O. website",
                        projectURL:"https://www.ekpizo.gr/",
                        projectDetails:"A Non for Profit Organization which defends the rights of all people, as consumers.",
                        responsibilities:"CMS (Drupal) website development, custom PHP admin panel development for managing subscribed users."
                    },
                    {
                        projectName:"JoinCargo",
                        projectURL:"http://www.joincargo.com/",
                        projectDetails:"A logistics web platform that brings together shippers andcarriers.",
                        responsibilities:"Reconfigure HTML5 / CSS3 website design, according to new mockups and new template, in order to be functional with Laravel Framework & Blade templating engine."
                    }
                ]
            },
            {
                workName: "N.S.R.F. Voucher Software Engineer",
                companyName: "SciFY N.P.O.",
                companyDescription:"",
                companyImage: "images/scify_logo_108.png",
                date: "Nov. 2014 - May 2015",
                url:"http://www.scify.gr/site/el/",
                details: [
                    "R&D Ontology Learning Java pet project.",
                    "Ontologies creation by extracting corresponding domain’s terms and their relationships from a corpus of natural language text.",
                    "Refactor & new version development."
                ],
                topProjects:[
                    {
                        projectName:"",
                        projectURL:"",
                        projectDetails:"",
                        responsibilities:""
                    }
                ]
            },
            {
                workName: "N.S.R.F. Voucher - Executives SMEs",
                companyName: "Alkyon E.E.",
                companyDescription:"Construction company",
                companyImage: "images/alkyon.jpg",
                date: "January 2014 - July 2014",
                url:"http://www.alkyon-energy.gr/",
                details: [
                    "Customer Service. Communication with suppliers.",
                    "Translation of documents from Greek to English and vice versa.",
                    "Responsible for external payments (Banks,Public Services)."
                ],
                topProjects:[
                    {
                        projectName:"",
                        projectURL:"",
                        projectDetails:"",
                        responsibilities:""
                    }
                ]
            }
        ];

        // get all previous works
        workExp.getWorks = function(){
            return workList;
        };

        // get one work by index number
        workExp.getWork = function (index) {
            return workList[index];
        };

        return workExp;
    });