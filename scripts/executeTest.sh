npm run test:unit
if [["$?" == 0]]; then
    echo "success!!!!!!!!!!!!!"
else
    echo "fail!!!!!!!!"
    PASS = false
fi