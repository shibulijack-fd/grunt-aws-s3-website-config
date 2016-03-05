/*
 * grunt-aws-s3-website-config
 * https://github.com/shibulijack-fd/grunt-aws-s3-website-config
 *
 * Copyright (c) 2016 Shibu Lijack
 * Licensed under the MIT license.
 */

 'use strict';
 var AWS = require('aws-sdk');

 module.exports = function(grunt) {

  grunt.registerTask('aws_s3_website_config', 'Simple Grunt Plugin to modify AWS S3 Website Configurations', function() {

    var done = this.async();
    var options = this.options({
      bucket: '',
      errorDocument: '',
      indexDocument: '',
      contentMD: '',
      redirectJSON: 'redirects.json',
      parentJSONKey: 'RoutingRules'
    });
  
    function putBucketWebsite() {

        var s3 = new AWS.S3();
        var redirects = grunt.file.readJSON(options.redirectJSON);
        var params = {
          Bucket: options.bucket, 
          WebsiteConfiguration: { 
            ErrorDocument: {
              Key: options.errorDocument 
            },
            IndexDocument: {
              Suffix: options.indexDocument 
            },
            RoutingRules: redirects[options.parentJSONKey]
          },
           ContentMD5: options.contentMD
        };
        grunt.verbose.writeln(JSON.stringify(params, null, 2));
        
        s3.putBucketWebsite(params, done);

    }

    putBucketWebsite();

  });

};
