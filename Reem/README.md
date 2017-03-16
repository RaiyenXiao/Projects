# Reem
记录用git指令行上传操作<br/>
1.PC端已安装Git，首先在GitHub新建一个仓库，然后在PC端想要存放的文件下右击Git Bash here<br/>
2.克隆库 git clone url(git@github.com:RaiyenXiao/Reem.git 这边我使用SSH链接，因为https不翻墙速度太慢，上传可能会导致用户名密码失效 )<br/>克隆的时候会要求输入key密码<br/>
3.进入文件夹 cd Reem<br/>
4.输入git config --list  可以查看所有配置项 <br/>
5.输入git status 查看工作区状态<br/>
6.直接将我们开发好的文件复制粘贴到Reem目录下<br/>
7.存放到暂存区  git add XXX（放文件名）  git add .（一次性提交修改的文件到暂存区）<br/>
8.输入git status我们可以看到文件已经全部存放到暂存区<br/>
9.输入git commit -m "放备注" 提交<br/>
10.git push origin master 推送改动提交到远程仓库（master可以换成你想要推送的任何分支）<br/>上传的时候会要求输入key密码<br/>