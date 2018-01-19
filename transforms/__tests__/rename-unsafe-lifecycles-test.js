/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

const tests = [
  'arrow-functions',
  'create-react-class',
  'instance-methods',
  'standalone-function',
  'variable-within-class-method',
];

const defineTest = require('jscodeshift/dist/testUtils').defineTest;

describe('rename-unsafe-lifecycles', () => {
  tests.forEach(test =>
    defineTest(
      __dirname,
      'rename-unsafe-lifecycles',
      null,
      `rename-unsafe-lifecycles/${test}`
    )
  );
});
