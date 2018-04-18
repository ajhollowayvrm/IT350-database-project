import subprocess
import string

msqlr = subprocess.Popen("sudo service mongod status".split(), stdout=subprocess.PIPE).stdout
grep = subprocess.Popen(["grep", "active (running)"], stdin=msqlr, stdout=subprocess.PIPE).stdout
if(grep.read() != ''):
    if grep.read().find("active (running)"):
        print "OK - MongoDB is running."
    else:
        print "Not OK - MongoDB is not running."
else:
    print "Not OK - MongoDB is not running."