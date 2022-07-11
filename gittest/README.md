# gittest
git notes

<h1>.gitignore exclude folder but include specific subfolder</h1>
<p>
  References:<br/>
  - https://stackoverflow.com/questions/5533050/gitignore-exclude-folder-but-include-specific-subfolder?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa <br/>  
</p>
<p><i>
I have the folder application/ which I add to the .gitignore. Inside the application/ folder is the folder<br/> application/language/gr. How can I include this folder? I've tried this<br/>
<br/>
<b>application/<br/>
!application/language/gr/</b><br/>
</i></p>

<p>
If you exclude application/, then everything under it will always be excluded (even if some later negative exclusion pattern (“unignore”) might match something under application/).<br/>
To do what you want, you have to “unignore” every parent directory of anything that you want to “unignore”. Usually you end up writing rules for this situation in pairs: ignore everything in a directory, but not some certain subdirectory.<br/>
<br/>
<b>
# you can skip this first one if it is not already excluded by prior patterns<br/>
!application/<br/>
<br/>
application/*<br/>
!application/language/<br/>
<br/>
application/language/*<br/>
!application/language/gr/<br/>
</b>
<br/>  
<b>Note</b><br/>
The trailing /* is significant:<br/>
<br/>
    The pattern dir/ excludes a directory named dir and (implicitly) everything under it.<br/>
    With dir/, Git will never look at anything under dir, and thus will never apply any of the “un-exclude” patterns to anything under dir.<br/>
    The pattern dir/* says nothing about dir itself; it just excludes everything under dir. With dir/*, Git will process the direct contents of dir, giving other patterns a chance to “un-exclude” some bit of the content (!dir/sub/).<br/>
<br/>  
</p>

<h1>Git ignore sub folders</h1>
<p>
  References:<br/>
  - https://stackoverflow.com/questions/2545602/git-ignore-sub-folders?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa <br/>  
</p>
<p><i>
<br/>
I have a lot of projects in my .Net solution. I would like to exclude all "bin/Debug" and "bin/Release" folders (and their contents), but still include the "bin" folder itself and any dll's contained therein.<br/>
<br/>
.gitignore with "bin/" ignores "Debug" and "Release" folders, but also any dll's contained in the "bin" folder.<br/>
<br/>
"bin/Debug" or "bin/Release" in the .gitignore file does not exclude the directories, unless I fully qualify the ignore pattern as "Solution/Project/bin/Debug" - which I don't want to do as I will need to include this full pattern for each project in my solution, as well as add it for any new projects added.<br/>
<br/>
Any suggestions?<br/>
<br/>
</i></p>
<p>
<br/>
Have you tried wildcards?<br/>
<br/>
<b>
Solution/*/bin/Debug<br/>
Solution/*/bin/Release<br/>
</b>
<br/>
With version 1.8.2 of git, you can also use the ** wildcard to match any level of subdirectories:<br/>
<br/>
<b>  
**/bin/Debug/<br/>
**/bin/Release/<br/>
</b>  
<br/> 
</p>  
