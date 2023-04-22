/* this will create error
import {greet} from './greetingEspanol.js';
import {greet} from './greetingFrancais.js';
*/

import { greet as greetSpanish } from './greetingEspanol.js';
import { greet as greetFrench } from './greetingFrancais.js';

greetFrench();
greetSpanish();
