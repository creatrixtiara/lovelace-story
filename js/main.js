var data = [
/*  {
        "question_number": " ",
        "question_value": " ",
        "answer_value": " ",
        "story_value": " ",
    }, */
    {
        "question_number": "0",
        "question_value": "PHA+U28gaGVyZSdzIGhvdyB0aGlzIHdvcmtzLjwvcD4NCjxwPlR5cGUgJ2xvdmVsYWNlJyBpbiB0aGUgYm94IGJlbG93LCB3aXRob3V0IHF1b3RhdGlvbiBtYXJrcy48L3A+",
        "answer_value": "bG92ZWxhY2U=",
        "story_value": "PHA+RmlndXJlIG91dCB3aGF0IHlvdSBuZWVkIHRvIGVudGVyIHVwIHRoZXJlIGFuZCB5b3Ugd2lsbCBsZWFybiBzb21ldGhpbmcgZnJvbSBtZSAtIGEgcmVjaXBlLCBhIHJlYWRpbmcsIGEgcmVjb3VudGluZy48L3A+DQo8cD5SZXR1cm4gcmVndWxhcmx5IGFuZCB5b3UgbWF5IGZpbmQgc29tZXRoaW5nIGVsc2UgSSBoYXZlIGNvbWUgdG8gcmVhbGlzZSBhYm91dCB0aGlzIHdvcmxkLCBhYm91dCB0aGUgdW5zZWVuLCBhYm91dCBtZS48L3A+DQo8cD5Ob3cgdHJ5IGFub3RoZXIgcGFnZS48L3A+",
    },
    {
        "question_number": "1",
        "question_value": "PHA+d2UnbGwgdGFrZSBvdXIgaGF0cyBvdXRzaWRlPGJyIC8+DQpsZWF2ZSBvdXIgbGl2ZXMgYmVoaW5kPGJyIC8+DQphbmQgd2F0Y2ggdGhlIDxhIGhyZWY9Imh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9M050NHZmemVveFEiPiYjeDI3Mjg7ICYjeDI3Mjg7ICYjeDI3Mjg7PC9hPiBnbyBvdXQ8L3A+", 
        "answer_value": "c3RhcnM=", 
        "story_value": "PHA+SSB1bmRlcnN0YW5kIHRoYXQgcGVvcGxlIGhlcmUgbG9vayBhdCBzdGFycyBhcyBhIG1lYW5zIG9mIHdheWZpbmRpbmcuIFNlZWsgdGhlIE5vcnRoIFN0YXIsIEkgYW0gdG9sZCwgYW5kIG9uZSB3aWxsIGFsd2F5cyBrbm93IHdoZXJlIHRoZXkgYXJlLCBob3cgdG8gZ2V0IHRvIHdoZXJlIHRoZXkgd2lzaCB0byBiZS48L3A+DQo8cD5JIGdyZXcgdXAgdW5kZXJzdGFuZGluZyB0aGUgc3RhcnMgYXMgcGF0aHdheXMuIE9uZSBkb2VzIG5vdCBqdXN0IGxvb2sgdXAgYXQgdGhlIHN0YXJzIHRvIGZpZ3VyZSBvdXQgdGhlIG5leHQgc3RlcDogb25lIHVzZXMgdGhlIHN0YXJzIHRvIDxlbT5nZXQ8L2VtPiB0aGVyZS4gVGFrZSBhIGRlZXAgYnJlYXRoLCBjb25uZWN0IHlvdXIgaGVhcnQgdG8gdGhlIGhvdCwgcHVsc2luZyBjb3JlIG9mIHRoZSBzdGFyLCBmZWVsIHlvdXJzZWxmIGRpc3NvbHZlIGFuZCByZXNvbHZlIHRvIHdoZXJlIHlvdSBpbnRlbmQuPC9wPg0KPHA+TW9zdCBwZW9wbGUgaGFkIHZlcnkgY2xlYXIgaW50ZW50aW9ucyBvZiB3aGVyZSB0aGV5IHdhbnRlZCB0byB0cmF2ZWwgdG8sIGNvbnN1bHRpbmcgc3RhciBtYXBzIGFuZCBjaGFydGluZyBjb3Vyc2VzIGFyb3VuZCBwbGFuZXRzLiBMZW9uaXMgc3F1YXJlcyBDeWduaSByaWdodCBieSBTaXJpdXMgLSBJIGhlYXIgdGhlcmUgaXMgYSB3b3JsZCBmdWxsIG9mIGZyaWVuZGx5IGJlaW5ncyBmdWxsIG9mIGZsdWZmIGFuZCBsb3ZlLiBUaGUgcGFzc2FnZSBvZiBBc3Rlcm9pZCAxMTgxIGJyaW5ncyBhbiBpbnRpbWlkYXRpbmcgeWV0IGFsbHVyaW5nIHdvcmxkIHdoZXJlIEZlbW1lIGhvbGRzIHBvd2VyIGFuZCBjYWxscyBvbiB0aG9zZSB2aXNpdGluZyB0byBoYXJuZXNzIHRoZWlyIG93biAtIGJ5IGhvbGRpbmcgb24gdG8gdGhlaXIgZGVtb25zLCBiZWZyaWVuZGluZyB0aGVtLCBmaW5kaW5nIHN0cmVuZ3RoIGFuZCBwb3dlciB3aXRoaW4gdGhlbS4gVGhlIGVmZmVjdCBpcyBldmVuIG1vcmUgcG90ZW50IHdoZW4gdmlzaXRlZCBvbiBibG9vZCBtb29ucy48L3A+DQo8cD5JIHBlcnNvbmFsbHkgZW5qb3kgdHJhdmVsbGluZyBhdCByYW5kb20sIHBpY2tpbmcgdGhlIGZpcnN0IHN0YXIgSSBzZWUgLSBvciByZWFsbHksIHRoZSBmaXJzdCBzdGFyIHdob3NlIGNvcmUgY2FsbGVkIHRvIG15IGhlYXJ0IC0gYW5kIGxldHRpbmcgaXQgdGFrZSBtZSB3aGVyZSBpdCB3YW50cyBtZSB0byBiZS4gSSd2ZSBzZWVuIHBsYW5ldHMgdGhhdCByYWluZWQgZGlhbW9uZHMsIG1ldGVvcnMgaG9sZGluZyBjcnVjaWJsZXMgb2YgaW1wZW5kaW5nIGxpZmUsIGV2ZW4gcm9kZSBhIGNvbWV0IHJvdW5kIGEgZ2FsYXh5LjwvcD4NCjxwPk9uIHRoYXQgdmVyeSBjb21ldCByaWRlLCB0dXJuaW5nIGEgY29ybmVyIHBhc3QgS3VpcGVyLCBJIGZlbHQgYSB2ZXJ5IHN0cm9uZyBwdWxsIHRvd2FyZHMgYSBicmlnaHQsIHdhcm0gc3Rhcjsgbm90IHRoZSBiaWdnZXN0IEkgaGFkIGV2ZXIgc2VlbiwgYnV0IHRoZSBtb3N0IGludHJpZ3VpbmcsIHRoZSBtb3N0IGVsZWN0cmljLCBmdWxsIG9mIHB1bHNhdGluZyBsaWZlIGFuZCBtYWdpYyBhbmQgcG90ZW50aWFsLiBDYWxsaW5nIHRvIG1lIGFuZCBkcmF3aW5nIG1lIGluIHNvIGxvdWRseSBJIGZlbHQgbGlrZSB0aGUgY29tZXQgaXRzZWxmIHdhcyBiZWluZyBwdWxsZWQgb2ZmLWNvdXJzZS48L3A+DQo8cD5JIGRpZCBub3QgcmVjb2duaXNlIHRoaXMgc3RhciwgZGlkIG5vdCBrbm93IHdoZXJlIGl0IHdvdWxkIHRha2UgbWUuIEkgaGFkIG5vIHN0YXIgY2hhcnRzIG9uIG1lLCBubyB3YXkgdG8gY2hlY2sgd2hlcmUgSSB3b3VsZCBnbyBvciBob3cgSSB3b3VsZCBnZXQgaG9tZS4gSWYgSSB3YW50ZWQgdG8gZXZlbiBnZXQgaG9tZS48L3A+DQo8cD5UaGlzIGZlbHQgbW9yZSBsaWtlIGhvbWUsIHNvbWVob3cuPC9wPg0KPHA+TmVydm91cyB3aXRoIGVuZXJneSwgSSBsaW5rZWQgbXkgaGVhcnQgd2l0aCB0aGUgbXlzdGVyeSBzdGFyJ3MgY29yZTsgYSBnaWFudCB3YXZlIG9mIHNvbmljZXNxdWUgZW5lcmd5IG92ZXJ3aGVsbWVkIG1lLiBKdXN0IGFzIG15IGNvbWV0IHJpZGUgd2FzIGFib3V0IHRvIGNyYXNobGFuZCBpbnRvIGEgbGVzc2VyIGFzdGVyb2lkLCBJIGZlbHQgbXlzZWxmIGRpc3NvbHZlIHNvIHJhcGlkbHkgYW5kIHJlc29sdmUgZXZlbiBxdWlja2VyLCBvbiB0aGlzIHN0cmFuZ2Ugd29ybGQgSSBub3cgd3JpdGUgZnJvbS48L3A+DQo8cD5Tb2RkZW4gYW5kIHJvYnVzdCBhbmQgYmFsbXkgYW5kIGJyaXNrIGFuZCBidXp6aW5nIHdpdGggdml0YWxpdHkgYW5kIG11dGVkIHdpdGggc3VidGxldHkuIEEgbWVzcyBvZiBjb250cmFkaWN0aW9ucy4gQW5kIHRoZSBsb2NhbHMgZG9uJ3Qgc2VlbSB0byBwaWNrIHVwIG9uIGhvdyBtdWNoIHRoaXMgcGxhY2UgcmVhbGx5IGhvbGRzLjwvcD4NCjxwPldoZXJlIGFtIEk/IFdoYXQgaXMgdGhpcyBwbGFjZT8gPGVtPldoeTwvZW0+IHRoaXMgcGxhY2U/PC9wPg0KPHA+SSdtIGdvaW5nIHRvIGZpbmQgb3V0LjwvcD4=",
    },
    {
        "question_number": "2",
        "question_value": "PGltZyBzdHlsZT0ibWFyZ2luLWxlZnQ6LTIxMnB4OyIgc3JjPSJpbWcvMi5qcGciIC8+",
        "answer_value": "dW5mb2N1cw==",
        "story_value": "PHA+TWFueSBzcGVhayBhYm91dCB0aGUgbmVlZCBmb3IgZm9jdXMuIEZvciBjbGFyaXR5LiBLZWVwIGFuIGV5ZSBvbiBhIHNwZWNpZmljIGdvYWwsIGxldCB0aGUgcmVzdCBmYWRlIGF3YXkgbGlrZSBub2lzZS48L3A+DQoNCjxwPkkgZmVlbCB0aGF0IHRoZXJlIGlzIHZhbHVlIHVuYXBwcmVjaWF0ZWQgaW4gZ29pbmcgYSBsaXR0bGUgb3V0IG9mIGZvY3VzLg0KDQo8cD5LZWVwIHlvdXIgZXllcyBsb29zZS4gRG9uJ3Qgc2VlayBvdXQgYW55IG9uZSB0aGluZyAtIGxvb2sgYXQgZXZlcnl0aGluZy4gTGV0IHRoZSB2aXN1YWxzIHdhc2ggb3ZlciB5b3UsIGxldCB0aGUgY29sb3VycyBibGVlZCwgbGV0IGxpbmVzIHR1cm4gaW50byBjdXJ2ZXMgYW5kIGN1cnZlcyB0dXJuIGludG8gZHVzdC4gS2VlcCBpdCBzb2Z0LiBEb24ndCBzZWFyY2gsIGp1c3Qgb2JzZXJ2ZS48L3A+DQoNCjxwPkluIHRoYXQgc29mdG5lc3MsIGluIHRoYXQgbGFjayBvZiBmb2N1cywgdGhlIHVuZXhwZWN0ZWQgbWF5IGFwcGVhci4gQSBzZWNyZXQgZG9vcndheS4gVGhlIHBlcnNvbiB5b3Ugd2VyZSBtZWFudCB0byBtZWV0LiBIaWRkZW4gdHJlYXN1cmUuIEEgZGlmZmVyZW50IHJvYWQsIHN0cmlraW5nIHN0cmVldCBhcnQsIHJvb3N0cyBvZiBjaXR5IGFuaW1hbHMuIE1hZ2ljIHlvdSBtYXkgaGF2ZSBtaXNzZWQgaWYgeW91IHdlcmUgc3BlY2lmaWNhbGx5IGxvb2tpbmcgZm9yIHNvbWV0aGluZy48L3A+DQoNCjxwPlRoZSBleWVzIHdpbGwga25vdyB3aGVuIHRvIGZvY3VzLjxiciAvPg0KRG9uJ3QgY29udHJvbCB0aGVtLjxiciAvPg0KTGV0IHRoZW0uPC9wPg==",
    },
    {
        "question_number": "3",
        "question_value": "PGltZyBzcmM9ImltZy8zLmdpZiIgLz4=",
        "answer_value": "cG93ZXI=",
        "story_value": "PHA+PHN0cm9uZz5BIFNQRUxMIFRPIEhBUk5FU1MgRUxFQ1RSSUNJVFk8L3N0cm9uZz48L3A+DQoNCg0KPHA+RmluZCBhbiBvYmplY3QgcmVsYXRlZCB0byB5b3VyIHB1cnBvc2UgLSBhbiBvYmplY3QgdGhhdCBoYXMgdGhlIGFiaWxpdHkgdG8gZHJhdyBpbiwgY29udmVydCwgaGFybmVzcywgYW5kIGVtaXQgZW5lcmd5LiBBIHRlbGVwaG9uZSBmb3IgYmV0dGVyIGNvbW11bmljYXRpb24sIGEgbGlnaHQgZm9yIGlkZWFzLCBhIHZlaGljbGUgZm9yIHNhZmUgdHJhdmVscy4gQW4gb2JqZWN0IHRoYXQgY2FuIGJlIGNvbm5lY3RlZCBhbmQgdHVybmVkIG9uIGJ5IGNvbnZlbnRpb25hbCBtZWFucy4gRWxlY3RyaWNpdHkgaXMgbmV2ZXIgbXVuZGFuZS48L3A+DQoNCg0KPHA+SG9sZCB5b3VyIG9iamVjdC4gVGhpbmsgYWJvdXQgeW91ciBwdXJwb3NlLiBXaGF0IGRvIHlvdSB3aXNoIHRvIGRyYXcgaW4gYW5kIGVtaXQgb3V0PyBXaGF0IGVuZXJneSBkbyB5b3Ugd2lzaCB0byBoYXJuZXNzIGFuZCBjaGFyZ2U/IEhvdyB3aWxsIHRoaXMgb2JqZWN0IGhlbHAgeW91PyBUaGluayBhYm91dCB5b3VyIHB1cnBvc2UsIHRoZW4gZmVlbCB5b3VyIHB1cnBvc2UsIGZlZWwgaXQgZ28gZnJvbSB5b3VyIG1pbmQgdG8geW91ciBzb3VsIHRvIHlvdXIgYm9keS4gTGV0IGl0IGZsb3cgdGhyb3VnaCB5b3VyIGNlbGxzLCB5b3VyIGJsb29kLCB5b3VyIGJyZWF0aC4gWW91IHRvbyBhcmUgbWFkZSBvZiBlbmVyZ3kuIFlvdSB0b28gYXJlIG1hZGUgb2YgZWxlY3RyaWNpdHkuPC9wPg0KDQoNCjxwPkhvbGQgb24gdGlnaHRlciB0byB0aGUgb2JqZWN0LiBQbHVnIHlvdXIgcGVyc29uYWwgZW5lcmd5IGludG8gaXQuIEZlZWwgeW91ciBwb3dlciwgeW91ciB0aG91Z2h0cywgeW91ciBwdXJwb3NlIGdvIGZyb20geW91ciBzb3VsIHRvIHlvdXIgYm9keSB0byB0aGUgb2JqZWN0LiBDb25jZW50cmF0ZSBvbiB5b3VyIHB1cnBvc2UsIG9uIGhvdyB0aGlzIG9iamVjdCBzZXJ2ZXMgeW91ciBwdXJwb3NlLCBob3cgeW91ciBwdXJwb3NlIHNlcnZlcyB5b3UuIEZlZWwgdGhlIG9iamVjdCBwb3dlciB1cCBmcm9tIHlvdXIgcGFzc2lvbiBhbmQgZW5lcmd5LiBGZWVsIHlvdXIgZWxlY3RyaWNpdHkgcG93ZXJpbmcgdGhpcyBvYmplY3QuPC9wPg0KDQoNCjxwPlR1cm4geW91ciBvYmplY3Qgb24gdGhyb3VnaCBpdHMgdXN1YWwgbWVhbnMuIENvbnRpbnVlIGhvbGRpbmcgb24gdG8geW91ciBvYmplY3QsIGJ1dCBtYWtlIHN1cmUgeW91IGtlZXAgeW91cnNlbGYgc2FmZS4gRmVlbCB0aGUgZWxlY3RyaWNpdHkgZnJvbSBpdHMgb3RoZXIgc291cmNlIHR1cm4gaW50byBlbmVyZ3ksIHR1cm4gaW50byB2aWJyYXRpb24sIHR1cm4gaW50byBzb3VuZCBhbmQgbGlnaHQsIGludG8gd2F2ZXMgYW5kIHBhcnRpY2xlcy4gRmVlbCBpdHMgcnVtYmxlLCBpdHMgaGVhdCwgaXRzIGxpZ2h0LjwvcD4NCg0KDQo8cD5GZWVsIGl0cyBlbGVjdHJpY2l0eSBhbmQgeW91cnMgbWluZ2xpbmcgd2l0aGluIHRoZSBvYmplY3QuIEZlZWwgeW91ciBwdXJwb3NlIGNoYXJnZSBpdHMgcG93ZXIsIGl0cyBwb3dlciBjaGFyZ2luZyB5b3VyIHB1cnBvc2UuIFRoZSBtYWdpYyBpcyBpbiB0aGUgb2JqZWN0LCB0aGUgbWFnaWMgaXMgaW4geW91LCB0aGUgbWFnaWMgaXMgeW91LjwvcD4NCg0KDQo8cD5GZWVsIHlvdXJzZWxmIGRpc3NpcGF0ZSBpbnRvIHdhdmVzIGFuZCBwYXJ0aWNsZXMuIEZlZWwgeW91ciBwdXJwb3NlIHBlcm1lYXRlIHRoZSBhaXIsIHdhZnQgdGhyb3VnaCB3YWxscywgYmVuZCB0aHJvdWdoIHdhdGVyLiBGZWVsIHlvdXJzZWxmIHJlYWNoaW5nIG90aGVyIHBlb3BsZSwgb3RoZXIgYmVpbmdzIGZ1bGwgb2YgbWFnaWMgYW5kIGVuZXJneSBhbmQgZWxlY3RyaWNpdHksIHRoZWlycyBjb21pbmdsaW5nIHdpdGggeW91cnMsIHRoZW0gcGFyc2luZyB5b3UuIEVtcG93ZXJlZCBieSB5b3UuIEVuZXJnaXplZCBieSB5b3UuIEVtcG93ZXJpbmcgeW91LiBFbmVyZ2l6aW5nIHlvdS48L3A+DQoNCg0KPHA+RmVlbCB0aGUgb2JqZWN0IGNvbnRhaW4gc29tZSBlbmVyZ3kgd2l0aGluLCBzYWZlIGluIGEgYmF0dGVyeSwgc3RvcmluZyBzb21lIGZvciBsYXRlci4gRmVlbCBhIHBhcnQgb2YgeW91IHByb3RlY3RlZCwgcmVhZHkgdG8gYmUgc2VudCBvdXQgdGhlIG5leHQgdGltZSB0aGUgb2JqZWN0IGlzIHR1cm5lZCBvbiwgY29udGludWluZyB0byBwb3dlciB5b3VyIHB1cnBvc2UgZXZlbiBhZnRlciBpdCBpcyB0dXJuZWQgb2ZmIGZvciB0aGlzIHJvdW5kLjwvcD4NCg0KDQo8cD5CcmVhdGhlIGRlZXAuIENvbGxlY3QgeW91cnNlbGYuIEJyaW5nIHRoZSB3YXZlcyBhbmQgcGFydGljbGVzIGJhY2sgaW50byBhIGNvaGVzaXZlIGZvcm0uIEJ1aWxkIHlvdXIgcGVyc29uYWwgYmF0dGVyeS4gQnJlYXRoZS4gQWlyIGlzIGFsc28gZW5lcmd5LjwvcD4NCg0KDQo8cD5UdXJuIHRoZSBvYmplY3Qgb2ZmLiBEaXNjaGFyZ2UgeW91ciBlbGVjdHJpY2l0eSBmcm9tIHRoZSBvYmplY3QuIERyYXcgaXQgYmFjayBpbnRvIHlvdSwgaW50byB5b3VyIHBlcnNvbmFsIGJhdHRlcnksIHlvdXIgb3duIGVuZXJneSBzb3VyY2UuIFJlc3QgdGhlIG9iamVjdC4gSXRzIHBvd2VyIGhhcyBnb25lIGZhciBhbmQgd2lkZS4gTGV0IGl0IGNvb2wuPC9wPg0KDQoNCjxwPlJlc3QuIFlvdXIgcG93ZXIgaGFzIGdvbmUgZmFyIGFuZCB3aWRlLiBDb29sIG9mZi4gRG8gbm90IG92ZXJoZWF0LiBTYXZlIHlvdXIgcG93ZXIgZm9yIHRoZSBuZXh0IHRpbWUgeW91ciBwdXJwb3NlIG5lZWRzIGEgcmVjaGFyZ2UuPC9wPg==",
    },
];

var questionIndex = data.length - 1;
var wrongAnswer = "<h2>Not quite there...</h2>";

// this function decides which data item to show
function render(){
        $('#questionNumber').text("\u2728 " + (questionIndex) + " \u2728");
        $('#question').html(atob(data[questionIndex]["question_value"]));
        $('#otherquestions').html(buildQuestionList() + ' &#x2728;');
}

// this function checks if an answer is correct
function toggleFields(){
    var userAnswer = $('#answer-input').val().toLowerCase();
    var comparisonAnswer = atob(data[questionIndex]["answer_value"]);
    if (userAnswer == comparisonAnswer) {
        $('#story').html(atob(data[questionIndex]["story_value"]));
        $('#story').fadeIn(600);
    }
    else {
        $('#story').html(wrongAnswer);
        $('#story').show();
    }
    
}

// e.g.
// var q = getQuerystringParams();
// var questionNumber = parseInt(q['q']);
function getQuerystringParams(){
	var querystring = window.location.search;
	var questionmarkIndex = querystring.indexOf('?');
	if(questionmarkIndex < 0){
		return {};
	} else {
		var keyValueItems = querystring.substring(questionmarkIndex+1).split('&');
		var items = {}, pair, d = decodeURIComponent, i;
		for (i = 0; i < keyValueItems.length; i++) {
			pair = keyValueItems[i].split('=');
			items[d(pair[0])] = d(pair[1]);
		}
		return items;
	}
}

// this function creates an entry for each of the data items
function buildQuestionList(){
	var html = '';
	for(var i = 0; i < data.length;i++){
		html += '&#x2728; <a href="/lovelace-story/?q=' + (i) + '">' + (data[i]["question_number"]) + '</a> ';	
    }
	return html;
}

// this function sets up things so the page actually does things
$(document).ready(function () {

    var q = getQuerystringParams();
    if (q['q']) {
        questionIndex = parseInt(q['q']);
    }
    
    render();

    toggleFields(); //call this first so we start out with the correct visibility depending on the selected form values
    //this will call our toggleFields function every time the answer changes
    $('#answer-form').submit(function (e) {
        e.preventDefault();
        toggleFields();
    });
    
    buildQuestionList();
    
    $('#story').hide();
    
    
});
