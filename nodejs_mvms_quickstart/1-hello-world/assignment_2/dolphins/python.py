#!/usr/bin/python

fname = "names"
names = []
with open(fname, "r") as f:
    for line in f:
        names.append(line.strip())


fname = "edges"
sources = []
targets = []
degrees = [0]*len(names)

with open(fname, "r") as f:
    for line in f:
        l, id =  line.strip().split(" ")
        id = int(id)
        if l=="source" : 
            sources.append(id)
        if l=="target" : 
            targets.append(id)
        degrees[id] += 1
if len(sources) != len(targets) :
    print "error"

#output names
print "{"
print"\"nodes\": ["
for i in range(0, len(names)) :
    if i==len(names) - 1 : print "        {\"id\": \"%s\", \"group\":%d}" % (names[i], degrees[i])
    else : print "        {\"id\": \"%s\", \"group\":%d}," % (names[i], degrees[i])
print "],"
print "  \"links\": ["

#output edges
for i in range(0, len(sources)) :
    if i==len(sources) - 1 : 
        print "        {\"source\": \"%s\", \"target\": \"%s\", \"value\": %d}" % (names[sources[i]], names[targets[i]], 1)
    else :
        print "        {\"source\": \"%s\", \"target\": \"%s\", \"value\": %d}," % (names[sources[i]], names[targets[i]], 1)
print "    ]"
print "}"
