/*
 *  Place copyright or other info here...
 */

  ( function ( global , $ ) {

    // Define core
    var ob_Codiad = global.codiad,
        ar_ScriptList= document.getElementsByTagName('script') ,
        sr_SelfUrl = ar_ScriptList[ar_ScriptList.length-1].src.split('?')[0] ,
        sr_PluginUrl = sr_SelfUrl.split('/').slice(0, -1).join('/') + '/' ;

    // Instantiates plugin
    $( function() {
        ob_Codiad.ob_OpenUngit.init();
    } ) ;

    ob_Codiad.ob_OpenUngit = {

      sr_ControllerFullUri: sr_PluginUrl + 'controller.php',
      sr_DialogFullUri: sr_PluginUrl + 'dialog.php',
      sr_DirPath: '' ,
      sr_DirSep: '' ,
      sr_UngitBaseUrl: '' ,
      UngitRepoPrefix: '/?noheader=true#/repository?path=' ,

      // Definition of initialisation
      init: function() {} ,

      fn_LaunchUngit: function() {
        this.sr_UngitBaseUrl = localStorage.getItem('codiad.plugin.OpenUngit.sr_UngitBaseUrl') ;
        if ( this.sr_UngitBaseUrl !== '' ) {
          sr_UngitBaseUrl = this.sr_UngitBaseUrl ;
          sr_UngitRepoPrefix = this.UngitRepoPrefix ;
          sr_DirPath = this.sr_DirPath ;
          $.get( this.sr_ControllerFullUri + '?sr_Instruction=GetWsPath' , function(sr_WsPath) {
            sr_FullUri = sr_UngitBaseUrl + sr_UngitRepoPrefix + $.trim(sr_WsPath) + sr_DirPath ;
            window.open(sr_FullUri) ;
          } ) ;
        }
        else {
          ob_Codiad.modal.load(500, this.sr_DialogFullUri + '?sr_Instruction=Msg_BaseUrl' ) ;
        }
      } ,

      fn_LoadNode: function() {
        this.sr_DirPath = $('#context-menu').attr('data-path') ;
        this.fn_LaunchUngit() ;
      } ,

      fn_LoadWs: function() {
        this.sr_DirPath = ob_Codiad.project.getCurrent() ;
        this.fn_LaunchUngit() ;
      }

    } ;

  } ) ( this , jQuery ) ;
