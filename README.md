Please run

```bash
yarn && yarn run check
```

, then it will show the log below.

```
yarn run v1.12.3
$ flow check
Error ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ index.js:28:20

number [1] is incompatible with Promise [2].

 [2] 10│       & (<V>(Promise<V>) => Hole<V>)
       :
     25│ // Error: ExportedType [1] is incompatible with Promise [2] in the return value.
     26│ new Hole(1)
     27│     .pipe(useExported)
 [1] 28│     .pipe(e => (e: ExternalType));
     29│
     30│



Found 1 error
error Command failed with exit code 2.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

# What

This is a repo to demonstrate a Flow bug for ticketing feacebook/flow issue.  

# Flow Version

0.93.0
