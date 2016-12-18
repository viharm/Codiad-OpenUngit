<?php
    // For config related stuff, we need to include the common.php
    require_once('../../common.php') ;
    // also we check for authenitification
    checkSession() ;

    // let as switch between our different actions if we want to return different type of information
    switch($_GET['sr_Instruction']) {
      case 'GetWsPath':
        echo WORKSPACE . DIRECTORY_SEPARATOR ;
        break ;
      case 'GetDirSep':
        echo DIRECTORY_SEPARATOR ;
        break ;
    }
?>