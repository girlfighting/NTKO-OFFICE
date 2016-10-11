/**
 * Created by Stone on 2016/10/11.
 */
function AddMyMenuItems(){
    try{
        //在自定义菜单中增加菜单项目
        TANGER_OCX_AddCustomMenuItem("我的菜单1",false,false,1);
        TANGER_OCX_AddCustomMenuItem("");
        TANGER_OCX_AddCustomMenuItem("我的菜单2",false,false,2);
        TANGER_OCX_AddCustomMenuItem("");
        TANGER_OCX_AddCustomMenuItem("我的菜单3",false,true,3);
        //在文件菜单中增加菜单项目
        TANGER_OCX_AddFileMenuItem("创建Word",false,false,1);
        TANGER_OCX_AddFileMenuItem("创建Excl",false,false,2);
        TANGER_OCX_AddFileMenuItem("创建PPT",false,false,3);
        TANGER_OCX_AddFileMenuItem("关闭文档",false,true,4);
        TANGER_OCX_AddFileMenuItem("");
    }catch(err){
        alert("不能创建新对象: "+err.number+":"+err.description);
    }
    finally{

    }

}