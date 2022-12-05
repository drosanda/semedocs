#!/bin/bash
git push tca master
git push origin master
ssh -t cenah@159.65.9.159 "./semedocs.sh"
