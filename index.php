<?php
	header('Content-Type:text/html;charset=utf-8');

	//var_dump($_SERVER); 打印出来为数组

	//初始化文件目录  默认为main
	$dir = 'main';

	//初始化文件名称  默认为index
	$filename = 'index';

	//处理url 路径  array_key_exists('PATH_INFO',$_SERVER) 是判断$_SERVER 中包含 PATH_INFO
	if(array_key_exists('PATH_INFO',$_SERVER)){
		//获取请求路径 获取到的为 /main/index
		$path = $_SERVER['PATH_INFO'];
		//截取路径第一个/之后的内容
		$path = substr($path,1);
		//把路径以/分割开 explode
		$ret = explode('/', $path);
		//var_dump($ret);  count相当与js中  数组的length
		if(count($ret) == 2) {
			$dir = $ret[0];
			$filename = $ret[1];
		} else {
			$filename = 'login';
		}
	}

	$url = './views/'.$dir.'/'.$filename.'.html';

	//echo $url;

	include($url);
?>