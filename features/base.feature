#Base

#
#  如何判断一个流程，应该写几个  Scenario .
#
#  如果特别简单的流程，随便瞄一眼就看明白的，一个 Scenario 就完事了。
#
#  如果有 fork 和 join 的。
#
#  可以 fork 下，每个分支，都写一个 Scenario.
#
#  而，如果 fork 下的分支中的流程也特别麻烦。
#  那就在 当前 fork 已经写好的Scenario 下，再分成多个子Scenario。
#
#  所有 Scenario 是顺序执行。