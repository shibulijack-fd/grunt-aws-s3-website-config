# grunt-aws-s3-website-config

[![Join the chat at https://gitter.im/shibulijack-fd/grunt-aws-s3-website-config](https://badges.gitter.im/shibulijack-fd/grunt-aws-s3-website-config.svg)](https://gitter.im/shibulijack-fd/grunt-aws-s3-website-config?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> Simple Grunt Plugin to modify AWS S3 Website Configurations

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-aws-s3-website-config --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-aws-s3-website-config');
```

## AWS S3 Website Configurations

### Overview
In your project's Gruntfile, add a section named `aws_s3_website_config` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    aws_s3_website_config: {
      options: {
        bucket: 'BUCKET_NAME',
        errorDocument: '404.html',
        indexDocument: 'index.html',
        contentMD5: '',
        redirectJSON: 'redirects.json',
        parentJSONKey: 'RoutingRules'
      }
    },
});
```

### Configure the Access Keys
Create your credentials file at *~/.aws/credentials* (*C:\Users\USER_NAME\.aws\credentials* for Windows users) and save the following lines after replacing the access key values with your own.

```
[default]

aws_access_key_id = YOUR_ACCESS_KEY_ID
aws_secret_access_key = YOUR_SECRET_ACCESS_KEY
```

### Options

#### options.bucket [required]
Type: `String`
Default value: ``

Specify the S3 bucket name.

#### options.errorDocument [optional]
Type: `String`
Default value: ``

Specify the Error Document for the website hosted on the S3 bucket.

#### options.indexDocument [optional]
Type: `String`
Default value: ``

Specify the Index Document for the website hosted on the S3 bucket.

#### options.contentMD5 [optional]
Type: `String`
Default value: ``

#### options.redirectJSON [required]
Type: `String`
Default value: `redirects.json`

Specify the JSON file which contains the Routing Rule configurations. [Sample JSON] (https://github.com/shibulijack-fd/grunt-aws-s3-website-config/blob/master/redirects.json)

#### options.parentJSONKey [optional]
Type: `String`
Default value: `RoutingRules`

Specify a custom parent key for the Routing Rule configurations.

### Usage Examples

#### Default Options
In this example, the default `redirectJSON` option is used to obtain Routing Rules configuration. So, the following config requires a `redirects.json` file in the top level directory.

```js
grunt.initConfig({
    aws_s3_website_config: {
      options: {
        bucket: 'BUCKET_NAME',
        errorDocument: '404.html',
        indexDocument: 'index.html'
      }
    },
});
```

#### Custom Options
In this example, the `redirectJSON` option is set to user defined path containing the JSON file which has the Routing Rules configuration.

```js
grunt.initConfig({
    aws_s3_website_config: {
      options: {
        bucket: 'BUCKET_NAME',
        errorDocument: '404.html',
        indexDocument: 'index.html',
        redirectJSON: 'path/to/redirects.json'
      }
    },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
