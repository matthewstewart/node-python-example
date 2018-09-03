import os
import json

u = os.uname()
result = {
  'os': {
    'name': u.sysname,
    'release': u.release,
    'version': u.version,
    'nodeName': u.nodename,
    'hardware': u.machine
  }
}
jsonResult = json.dumps(result, sort_keys=True, indent=2)
print(jsonResult)

  