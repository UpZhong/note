# npm 脚本有pre和post两个钩子。
* 举例来说，build脚本命令的钩子就是prebuild和postbuild。
* 自定义的脚本命令也可以加上pre和post钩子。比如，myscript这个脚本命令，也有premyscript和postmyscript钩子。不过，双重的pre和post无效，比如prepretest和postposttest是无效的。