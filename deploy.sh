#!/bin/bash
git push tca master
git push origin master
ssh -t cenah@s7.thecloudalert.com "./semedocs.sh"
