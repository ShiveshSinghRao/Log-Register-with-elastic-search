import { Client } from "@elastic/elasticsearch";
import "express-async-errors";
const elasticClient = new Client({
  node: "http://elastic:_zh4BSZfNCCUTXibBlHm@localhost:9200",
});

// creating a log
export const createLog = async (req, res, next) => {
  try {
    const result = await elasticClient.index({
      index: "logsh",
      body: {
        level: req.body.level,
        message: req.body.message,
        resourceId: req.body.resourceId,
        timestamp: req.body.timestampe,
        traceId: req.body.traceId,
        spanId: req.body.spanId,
        commit: req.body.commit,
        parentResourceId: req.body.parentResourceId,
      },
    });
    res.send(result);
  } catch (err) {
    throw err;
  }
};

// Getting All Logs

export const getLogs = async (req, res) => {
 // console.log("aa rah h yah tak");
  const result = await elasticClient.search({
    index: "logsh",
    body: {
      query: { match_all: {} },
    },
  });

  res.send(result?.hits?.hits);
};

// Searching a specific query
export const SearchLogs = async (req, res) => {
  const {
    resourceId,
    level,
    message,
    traceId,
    spanId,
    commit,
    parentResourceId,
  } = req.query;

  try {
    let queryBody = {
      query: {
        bool: {
          must: [],
        },
      },
    };

    if (
      resourceId ||
      level ||
      message ||
      traceId ||
      spanId ||
      commit ||
      parentResourceId
    ) {
      let mustClauses = [];

      if (resourceId) {
        mustClauses.push({ term: { "resource_id.keyword": resourceId } });
      }
      if (traceId) {
        mustClauses.push({ term: { "traceId.keyword": traceId } });
      }
      if (commit) {
        mustClauses.push({ term: { "commit.keyword": commit } });
      }
      if (spanId) {
        mustClauses.push({ term: { "spanId.keyword": spanId } });
      }
      if (parentResourceId) {
        mustClauses.push({
          term: { "parentResource_id.keyword": parentResourceId },
        });
      }

      if (level) {
        mustClauses.push({
          multi_match: {
            query: level,
            fields: ["level"],
            fuzziness: "AUTO",
          },
        });
      }

      if (message) {
        mustClauses.push({
          multi_match: {
            query: message,
            fields: ["message"],
            fuzziness: "AUTO",
          },
        });
      }

      queryBody.query.bool.must = mustClauses;
    }

    const response = await elasticClient.search({
      index: "logsh",
      body: queryBody,
    });

    // const logs = response.body?.hits?.hits.map((hit) => hit?._source);
    res.send(response);
  } catch (error) {
    console.error("Elasticsearch search error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
