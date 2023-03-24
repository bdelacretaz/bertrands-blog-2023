# https://stackoverflow.com/questions/6136022/script-to-get-the-http-status-code-of-a-list-of-urls

cat urls-of-old-content.txt | while read url
do
  echo -n "$url : STATUS_"
  curl -o /dev/null --silent --head --write-out '%{http_code}\n' $url
done | grep -v STATUS_200