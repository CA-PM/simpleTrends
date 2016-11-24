# simpleTrends
An interactive NVD3 based trend visualization for the CAPM OpenAPI

Installation Instructions:

1. Copy app to user app directory on CAPC (/opt/CA/PerformanceCenter/PC/webapps/pc/apps/user)
2. Modify/Add Interface context page tab
3. Add browser view(s) with height of 400
4. Add URL to app location with key parameters defined (see below)

CAPC Browser view sample URL:

/pc/apps/user/simpleTrends/multiMetric.html?id={ItemIdDA}&startTime={TimeStartUTC}&endTime={TimeEndUTC}

Key URL parameters:

id : is the ID of the interface for the selected context page
startTime: is the UNIX Epoch start time defined by the CAPC Dashboard time control
endTime: is the UNIX Epoch end time defined by the CAPC Dashboard time control

===================================================================================

License (refer to license.txt in folder for 3rd party license details)

Copyright (c) 2016 CA Technologies
 
The MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

===================================================================================