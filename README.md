# ni1963_drawio_plugin

��ƃ���
�Ƃ肠�����A�R�[�h����console.log(object)���L�q����object�̒��g��Chrome�̃f�x���b�p�[�@�c�[��(Ctrl + Shift + I)��Console���猩��Ƃ��낢��킩�邱�Ƃ������B

�v���O�C����
Draw.loadPlugin(function(ui) {//���g }
�Ə�����ui�o�R�ł��낢�둀�삷�銴���ō��

��{���̊�{
1. theGraph = ui.editor.graph��Graph�I�u�W�F�N�g�擾 
2. theGraph.model.cells��draw.io�Ŕz�u����Ă���}�`�̃f�[�^���i�[����Ă���i�������������Ί����̐}�`���������j
3. theGraph.selectionModel.cells�Ɍ��ݑI�𒆂̐}�`�̃f�[�^���i�[����Ă���i�I�������}�`�ɃA�N�Z�X�ł���j