# `/ecc-conventional-commit-review`

检查 staged 更改，并提出符合 Conventional Commits 格式的提交说明，确保类型、范围和长度适当。不会执行提交。

## 简单请求

```text
/ecc-conventional-commit-review 检查 staged 更改并提出提交说明。
```

## 模板请求

```text
/ecc-conventional-commit-review
仅检查已经 staged 的 diff。
更改背景：[目标]
提出 type、scope 和简洁的 Conventional Commit 消息；不要将任何内容加入暂存区，也不要提交。
```

## 详细请求

```text
/ecc-conventional-commit-review
仅分析当前 staged 更改，并结合任务背景[描述]进行判断。确定更改的统一目的、适当的 Conventional Commits 类型和精确 scope；检查 subject 的长度/清晰度，以及是否需要 body 或 breaking-change footer。如果 staged diff 混合了互不相关的任务，或信息不足，请指出，不要臆造背景。不要修改文件、Git 暂存区或历史记录；不要创建提交。请简要说明理由，并给出一个推荐提交说明；必要时提供备选方案。
```
