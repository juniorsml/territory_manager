/// <reference types="zone.js" />
/// <reference types="@types/meteor" />
/// <reference types="@types/underscore" />
/// <reference types="@types/chai" />
/// <reference types="@types/mocha" />

declare module "*.html" {
  const template: string;
  export default template;
}


declare module "*.scss" {
  const style: string;
  export default style;
}

declare module "*.less" {
  const style: string;
  export default style;
}

declare module "*.css" {
  const style: string;
  export default style;
}

declare module "*.sass" {
  const style: string;
  export default style;
}

declare module 'meteor/tmeasday:publish-counts' {
  import { Mongo } from 'meteor/mongo';

  interface CountsObject {
    get(publicationName: string): number;
    publish(context: any, publicationName: string, cursor: Mongo.Cursor, options: any): number;
  }

  export const Counts: CountsObject;
}

declare module "meteor/hwillson:stub-collections" {

  import { Mongo } from "meteor/mongo";

  interface IStubCollections {
    stub(collection: Mongo.Collection);
    restore();
  }

  /// <reference path='typings/tsd.d.ts' />
/// by corre.pw
///Counts.d.ts for https://atmospherejs.com/tmeasday/publish-counts
interface ICountOptions<T> {
	/** If you publish a count within a publication that also returns cursor(s), you probably want to pass {noReady: true} */
	noReady?: boolean;
	/** If you specify {nonReactive: true} the cursor won't be observed and only the initial count will be sent on initially subscribing. */
	nonReactive?: boolean;
	/** Pass the option, noWarnings: true, to Counts.publish to disable its warnings in
a development environment. */
	noWarnings?: boolean;
	/** countFromField allows you to specify a field to calculate the sum of its numbers across all documents. */
	countFromField?: (string | ((doc: T) => number));
	/** countFromFieldLength allows you to specify a field to calculate the sum of its length across all documents. */
    countFromFieldLength?: (string | ((doc: T) => { length: number }));
}
interface ICountsPublisFn {
	<T>(/** Meteor subscription */
		currentSubscription: Subscription,
		/** Counter-name for identify counter on client */
		counterName: string,
		/** Cursor for count */
		cursor: Mongo.Cursor<T>,
		/**  */
		options?: ICountOptions<T>): { stop: () => void };
	/** This function disables all development warnings on the server from publish-counts. */
	noWarnings: () => void;
}
interface ICountsServerSide {
	/**Server only function */
	publish: ICountsPublisFn;
}

interface ICountsClientSide extends Mongo.Collection<{ _id: string, count: number }> {
	/**client side only */
	get: (name: string) => number;
	/**client side only */
	has: (name: string) => boolean;
}

interface ICounts extends ICountsServerSide, ICountsClientSide { }

declare var Counts: ICounts

  const StubCollections: IStubCollections;

  export default StubCollections;
}

declare module "chai-spies" {
  const chaiSpies: (chai: any, utils: any) => void;

  export = chaiSpies;
}

interface SpyCalledWith extends Chai.Assertion {
  (...args: any[]): void;
  exactly(...args: any[]): void;
}

interface SpyCalledAlways extends Chai.Assertion {
  with: SpyCalledWith;
}

interface SpyCalledAt {
  most(n: number): void;
  least(n: number): void;
}

interface SpyCalled {
  (n?: number): void;
  /**
   * Assert that a spy has been called exactly once
   *
   * @api public
   */
  once: any;
  /**
   * Assert that a spy has been called exactly twice.
   *
   * @api public
   */
  twice: any;
  /**
   * Assert that a spy has been called exactly `n` times.
   *
   * @param {Number} n times
   * @api public
   */
  exactly(n: number): void;
  with: SpyCalledWith;
  /**
   * Assert that a spy has been called `n` or more times.
   *
   * @param {Number} n times
   * @api public
   */
  min(n: number): void;
  /**
   * Assert that a spy has been called `n` or fewer times.
   *
   * @param {Number} n times
   * @api public
   */
  max(n: number): void;
  at: SpyCalledAt;
  above(n: number): void;
  /**
   * Assert that a spy has been called more than `n` times.
   *
   * @param {Number} n times
   * @api public
   */
  gt(n: number): void;
  below(n: number): void;
  /**
   * Assert that a spy has been called less than `n` times.
   *
   * @param {Number} n times
   * @api public
   */
  lt(n: number): void;
}

declare namespace Chai {
  interface ChaiStatic {
    spy(): any;
  }

  interface Assertion {
    called: SpyCalled;
    always: SpyCalledAlways;
  }
}
