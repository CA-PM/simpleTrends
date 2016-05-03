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
