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
      errorDocument: '404.html',
      indexDocument: 'index.html',
      contentMD: ''
    });

    putBucketWebsite();
    
    function putBucketWebsite() {

        var s3 = new AWS.S3();
        var params = {
          Bucket: options.bucket, 
          WebsiteConfiguration: { 
            ErrorDocument: {
              Key: options.errorDocument 
            },
            IndexDocument: {
              Suffix: options.indexDocument 
            },
            RoutingRules: [
            {
              Redirect: { 
                ReplaceKeyPrefixWith: 'ticketing/',
              },
              Condition: {
                KeyPrefixEquals: 'tour/'
              }
            },
            /* more items */
            ]
          },
           ContentMD5: option.contentMD
        };
        s3.putBucketWebsite(params, done);

    }

  });

};
