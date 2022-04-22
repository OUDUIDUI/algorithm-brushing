import { expect, it } from 'vitest'
import { Twitter } from '.'

it('设计推特', () => {
  const twitter = new Twitter()
  twitter.postTweet(1, 5) // 用户 1 发送了一条新推文 (用户 id = 1, 推文 id = 5)
  expect(twitter.getNewsFeed(1)).toStrictEqual([5]) // 用户 1 的获取推文应当返回一个列表，其中包含一个 id 为 5 的推文
  twitter.follow(1, 2) // 用户 1 关注了用户 2
  twitter.postTweet(2, 6) // 用户 2 发送了一个新推文 (推文 id = 6)
  expect(twitter.getNewsFeed(1)).toStrictEqual([6, 5]) // 用户 1 的获取推文应当返回一个列表，其中包含两个推文，id 分别为 -> [6, 5] 。推文 id 6 应当在推文 id 5 之前，因为它是在 5 之后发送的
  twitter.unfollow(1, 2) // 用户 1 取消关注了用户 2
  expect(twitter.getNewsFeed(1)).toStrictEqual([5]) // 用户 1 获取推文应当返回一个列表，其中包含一个 id 为 5 的推文。因为用户 1 已经不再关注用户 2
})
