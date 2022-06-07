# Node.js basics

## Scripts

### File system (src/fs)

    npm run fs:create
    npm run fs:copy
    npm run fs:rename
    npm run fs:delete
    npm run fs:list
    npm run fs:read

### Command line interface(src/cli)

    node src/cli/args.js --propName value --prop2Name value2

#### For bash:

    RSS_name1=value1 RSS_name2=value2 node src/cli/env.js

#### For powershell:

    $env:RSS_name1="value1"; $env:RSS_name2="value2"; node src/cli/env.js

### Modules(src/modules)

    npm run modules

## Hash (src/hash)

    npm run hash

### Streams (src/streams)

    npm run streams:read
    npm run streams:write
    npm run streams:transform

### Zlib (src/zip)

    npm run zip:compress
    npm run zip:decompress

### Worker Threads (src/wt)

    npm run wt

### Child Processes (src/cp)

    node src/cp/cp.js value1 value2

