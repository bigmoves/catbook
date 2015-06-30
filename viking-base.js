module.exports = function( gulp, plugins, vb, cb ) {

  // Output updates
  vb.output.fonts = 'fonts/';
  // vb.output.content = vb.output.js + 'content/';
  // vb.output.img = 'img/';

  // Source updates
  // vb.sources.content = 'content/**/*';
  vb.sources.fonts = 'bower_components/font-awesome/fonts/**/*';
  // vb.sources.img = ['img/**/*', 'bower_components/hs-ui-core/img/**/*'];
  // vb.sources.hbs = [vb.sources.hbs, 'bower_components/hs-ui-core/hbs/**/*.hbs'];

  vb.preBuild = function() {

    return plugins.if( vb.prod, plugins.replace( /DEBUG:\strue/g, 'DEBUG: false' ) );
  };

  // vb.processHbsFileName = function(fileName) {
  //
  //   return fileName.replace('bower_components/hs-ui-core/hbs/', '');
  // };

  // Task updates
  vb.tasks.build.depends = [
    'css',
    // 'content',
    'fonts',
    'htmlbars',
    //'img',
    'root'
  ];

  // vb.tasks.content = {
  //   cb: function() {
  //
  //     return gulp.src( vb.sources.content )
  //       .pipe( gulp.dest( vb.output.publish + vb.output.content ) );
  //   }
  // };
  //
  vb.tasks.fonts = {
    cb: function() {

      return gulp.src( vb.sources.fonts )
        .pipe( gulp.dest( vb.output.publish + vb.output.fonts ) );
    }
  };

  // vb.tasks.htmlbars.depends = [
  //   // 'content',
  //   'img'
  // ];

  // vb.tasks.img = {
  //   cb: function() {

  //     return gulp.src( vb.sources.img )
  //       .pipe( gulp.dest( vb.output.publish + vb.output.img ) );
  //   }
  // };

  cb();
};
