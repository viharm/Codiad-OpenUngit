<?php
  require_once('../../common.php');
  switch($_GET['sr_Instruction']) {
    case 'Msg_BaseUrl':
      echo 'Please set Ungit base URL in settings' ;
      break ;
    case 'Config':
?>
<div class="openungit_settings">
    <label><span class="icon-flow-branch big-icon"></span>OpenUngit Settings</label>
    <hr>
    <table class="settings">
        <tr>
            <td style="width: 80%;">
                Ungit base URL
            </td>
            <td>
                <input class="setting" data-setting="codiad.plugin.OpenUngit.sr_UngitBaseUrl" type="text" />
            </td>
        </tr>
    </table>
</div>
<?php
      break ;
  }
?>
